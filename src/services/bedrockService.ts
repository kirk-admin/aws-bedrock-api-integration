import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface BedrockResponse {
  content: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
  };
}

class BedrockService {
  private client: BedrockRuntimeClient;
  private modelId: string;

  constructor() {
    this.client = new BedrockRuntimeClient({
      region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
      },
    });
    this.modelId = import.meta.env.VITE_AWS_BEDROCK_MODEL_ID || '';
  }

  async sendMessage(messages: ChatMessage[]): Promise<BedrockResponse> {
    try {
      const command = new InvokeModelCommand({
        modelId: this.modelId,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: 1000,
          messages: messages,
          system: 'You are a helpful AI assistant. Provide clear, concise, and accurate responses.',
        }),
      });

      const response = await this.client.send(command);
      
      if (!response.body) {
        throw new Error('No response body received');
      }

      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      
      return {
        content: responseBody.content[0].text,
        usage: {
          inputTokens: responseBody.usage?.input_tokens || 0,
          outputTokens: responseBody.usage?.output_tokens || 0,
        },
      };
    } catch (error) {
      console.error('Error calling Bedrock API:', error);
      throw new Error('Failed to get response from Claude');
    }
  }


}

export default BedrockService;
export type { ChatMessage, BedrockResponse };
