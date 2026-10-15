# AI-Arena — Multi-Agent AI System

**A Multi-LLM Platform for AI Response Comparison and Evaluation**

AI-Arena is a multi-agent AI application designed to integrate multiple Large Language Models (LLMs) into a unified workflow. Built using LangGraph, the system orchestrates AI interactions and incorporates a judge-based evaluation approach to compare and analyze model-generated responses.

The project explores how different AI models respond to the same input and how their outputs can be evaluated through an organized AI orchestration pipeline.

## Key Features

- **Multi-LLM Integration:** Integrates Google Gemini, Mistral, and Cohere.
- **AI Workflow Orchestration:** Uses LangGraph to manage AI execution workflows.
- **Response Comparison:** Supports comparison of outputs from different language models.
- **Judge-Based Evaluation:** Incorporates an AI judge workflow to evaluate generated responses.
- **Full-Stack Architecture:** Combines a React frontend with a Node.js and Express backend.
- **Modern Development Stack:** Uses Vite for frontend development and a modular backend architecture.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Backend | Node.js, Express.js |
| AI Orchestration | LangGraph |
| AI Providers | Google Gemini, Mistral, Cohere |
| AI SDK | Google Gen AI SDK |
| Database | MongoDB, where configured |
| API Communication | REST API |
| Deployment | Render |

## System Architecture

The application follows a full-stack architecture in which the frontend communicates with the backend, and the backend coordinates AI model interactions.

```text
                  React + Vite Frontend
                           |
                           v
                    Express Backend
                           |
                           v
                    LangGraph Workflow
                           |
              +------------+------------+
              |            |            |
              v            v            v
           Gemini        Mistral       Cohere
              |            |            |
              +------------+------------+
                           |
                           v
                  Judge / Evaluation
                           |
                           v
                    Response Output
```

The diagram represents the high-level workflow. The actual execution order depends on the implemented LangGraph pipeline.

## Getting Started

### Prerequisites

Ensure that the following tools are installed:

- Node.js
- npm
- Git
- API keys for the AI providers you intend to use

### 1. Clone the Repository

```bash
git clone https://github.com/Suryansh10-ctrl/AI-Arena.git
cd AI-Arena
```

### 2. Install Dependencies

Install the frontend dependencies:

```bash
cd frontend
npm install
```

Install the backend dependencies in a separate terminal, using the actual backend directory:

```bash
cd ai-orchestration
npm install
```

If your `package.json` files are located elsewhere, run these commands in the appropriate directories.

### 3. Configure Environment Variables

Create a `.env` file in the backend directory.

Example configuration:

```env
PORT=3000

GOOGLE_API_KEY=your_google_api_key
MISTRAL_API_KEY=your_mistral_api_key
COHERE_API_KEY=your_cohere_api_key

MONGO_URI=your_mongodb_connection_string
```

These variable names are examples. Use the exact names expected by your source code and configure only the services required by your implementation.

Do not commit API keys, database credentials, or other sensitive information to GitHub.

### 4. Start the Backend

Run the development command defined in the backend's `package.json`:

```bash
npm run dev
```

The backend development setup uses port `3000`.

### 5. Start the Frontend

Open a separate terminal:

```bash
cd frontend
npm run dev
```

Open the local URL displayed in the terminal. The default Vite development URL is usually:

```text
http://localhost:5173
```

## API Endpoint

The backend exposes an invocation endpoint for executing the AI workflow.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/invoke` | Submits input to the AI orchestration workflow |

The request body and response format depend on the backend implementation. Refer to the corresponding API route and workflow code for the exact schema.

## How It Works

1. **User Input:** The user submits a prompt through the frontend.
2. **Backend Processing:** The frontend sends the request to the Express API.
3. **Workflow Orchestration:** LangGraph coordinates the configured AI workflow.
4. **Model Execution:** The workflow invokes supported language model providers.
5. **Response Evaluation:** The judge component evaluates generated responses according to the implemented logic.
6. **Output Delivery:** The backend returns the results to the frontend for presentation.

## Project Structure

The broader project workspace contains components for frontend development, AI orchestration, and supporting services.

```text
AI-Arena/
├── frontend/          # React and Vite application
├── ai-orchestration/  # AI workflow and orchestration
├── auth/              # Authentication-related services
├── notification/      # Notification service
├── sandbox/           # Sandbox-related functionality
├── k8s/               # Kubernetes configuration
├── skaffold.yaml       # Skaffold configuration
└── README.md
```

Adjust this structure to match the actual contents of the AI-Arena repository. Some directories may belong to the broader workspace rather than the standalone application.

## Deployment

The application can be deployed using hosting platforms that support Node.js backends and modern frontend applications. The project has used Render for deployment.

Before deploying:

- Configure the required environment variables.
- Set the correct frontend API base URL.
- Configure CORS for the deployed frontend origin.
- Store provider API keys securely.
- Verify the backend start command and port configuration.
- Test the deployed AI workflow.

## Security Considerations

- Store API keys in environment variables.
- Never expose private API keys in frontend code.
- Validate incoming API requests.
- Restrict CORS to trusted origins in production.
- Handle API errors appropriately.
- Consider rate limiting and authentication where required.

## Learning Objectives

AI-Arena provides practical experience with:

- Multi-LLM application development
- AI workflow orchestration using LangGraph
- Backend development with Node.js and Express
- Third-party AI provider integration
- AI response evaluation
- Full-stack application architecture
- Cloud deployment and environment configuration

## Future Enhancements

Potential areas for improvement include:

- Standardized evaluation criteria for model responses
- Response latency and token usage tracking
- Persistent storage of comparison results
- Configurable model selection
- Transparent evaluation scoring
- Automated tests for AI orchestration workflows

These are possible future improvements and are not claims about existing functionality.

## Author

**Suryansh Sharma**

- GitHub: [Suryansh10-ctrl](https://github.com/Suryansh10-ctrl)
- Repository: [AI-Arena](https://github.com/Suryansh10-ctrl/AI-Arena)

---

AI-Arena — Exploring multi-agent AI orchestration and multi-LLM response evaluation.
