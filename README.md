# AWS Bedrock Chat App

A React application that integrates with AWS Bedrock API to chat with Claude 4.0.

## Features

- Real-time chat interface with Claude 4.0
- Modern UI built with TailwindCSS
- AWS Bedrock API integration
- Responsive design
- Error handling and loading states

## Prerequisites

- Node.js (v16 or higher)
- AWS Account with Bedrock access
- AWS IAM user with Bedrock permissions

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure AWS credentials:**
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_AWS_REGION=us-east-1
   VITE_AWS_ACCESS_KEY_ID=your_access_key_here
   VITE_AWS_SECRET_ACCESS_KEY=your_secret_key_here
   VITE_AWS_BEDROCK_MODEL_ID=MODEL here
   ```

3. **AWS IAM Permissions:**
   Ensure your IAM user has the following permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "bedrock:InvokeModel"
         ],
         "Resource": "arn:aws:bedrock:*::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0"
       }
     ]
   }
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

1. Open the application in your browser
2. Type your message in the input field
3. Press Enter or click Send to chat with Claude 4.0
4. View the conversation history in the chat interface

## Technologies Used

- React 19
- TypeScript
- TailwindCSS
- AWS SDK v3
- Vite

## Project Structure

```
src/
├── components/
│   └── Chat.tsx          # Main chat interface
├── services/
│   └── bedrockService.ts # AWS Bedrock API service
├── App.tsx               # Main application component
└── main.tsx             # Application entry point
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_AWS_REGION` | AWS region for Bedrock service | Yes |
| `VITE_AWS_ACCESS_KEY_ID` | AWS access key ID | Yes |
| `VITE_AWS_SECRET_ACCESS_KEY` | AWS secret access key | Yes |

## Troubleshooting

- **CORS Issues**: Ensure your AWS credentials are properly configured
- **API Errors**: Check that your IAM user has the correct Bedrock permissions
- **Region Issues**: Verify the AWS region supports Bedrock service

## Preview

<img width="918" height="1321" alt="image" src="https://github.com/user-attachments/assets/74c97211-fbbc-417a-a65a-054a12e5c858" />


MIT
