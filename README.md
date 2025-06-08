# InjaChat: Our T3 Chat Cloneathon Submission 🚀

## 📝 1. Project Overview

Welcome to **InjaChat**! This project is our official entry into the **T3 Chat Cloneathon**, an exciting open-source competition initiated by Theo (`@theo` on X/Twitter). Our goal is to build a high-quality, open-source AI chat application that closely mirrors the functionalities and user experience of T3 Chat, but with a crucial difference: **it's entirely built using Svelte 5 and SvelteKit.**

We are striving to leverage the performance, reactivity, and developer-friendly nature of Svelte to create a compelling alternative within the AI chat application landscape. This repository serves as our active development space for this challenge.

## 🎯 2. Purpose & The Cloneathon

This project exists primarily to participate in and win the **T3 Chat Cloneathon**. We believe in the power of Svelte and aim to showcase its capabilities in building complex, real-time applications by taking on this challenge.

### About the T3 Chat Cloneathon:

The T3 Chat Cloneathon is an open-source competition challenging developers to build their best clone of T3 Chat, emphasizing strong UI/UX. It's a sprint to create a functional and polished AI chat application within a tight timeframe.

*   **Official Tweet:** [https://x.com/theo/status/1931515264497254402](https://x.com/theo/status/1931515264497254402)
*   **Official Cloneathon Page:** [https://cloneathon.t3.chat](https://cloneathon.t3.chat)

#### Key Cloneathon Details:

*   **Type:** Open Source Competition (Hackathon-style)
*   **Challenge:** Build a cool AI chat app clone of T3 Chat.
*   **Deadline:** **June 17, 2025 at 12:00 PM PDT**
*   **Total Prize Pool:** **$10,000+**


#### Competition Rules Summary:
*   **Open Source Requirement:** Submissions must be open source (permissive license like MIT, Apache, BSD) and hosted on GitHub.
*   **Age Requirement:** Participants must be 18+ to be eligible for prizes.
*   **Team Size:** Maximum of 4 people per team.
*   **Code of Conduct:** Standard professional conduct applies.
*   **Content Usage:** Theo may use submitted projects for content.

## 🚀 3. How to Run This Project

To get InjaChat up and running on your local machine for development and testing, follow these steps.

### Prerequisites:

*   Node.js (LTS version recommended)
*   npm or Yarn

### Setup Instructions:

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:inja-online/inja_chat.git
    cd inja_chat
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the root of your project. You will need to add variables for your chosen AI providers, database, and authentication services.


4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should now be accessible in your browser at `http://localhost:5173` (or the port specified in your terminal).

## 🌟 4. Features

This section outlines the features mandated by the T3 Chat Cloneathon, along with bonus features we are aiming to implement.

### Core Requirements (Mandatory for Prize Qualification):

These are the minimum features required by the Cloneathon for any submission to qualify for prizes.

*   [ ] **Chat with Various LLMs:** Implement support for integrating with multiple large language models (LLMs) and providers (e.g., OpenAI, Anthropic, etc.).
*   [ ] **Authentication & Sync:** Robust user authentication system coupled with synchronized chat history across user sessions.

### Bonus Features (Ideas to Go Above and Beyond):

These are additional features suggested by the Cloneathon organizers to differentiate submissions. We are aiming to implement as many of these as possible to enhance the project.

*   [ ] **Attachment Support:** Allow users to upload files (images and PDFs) within chat conversations.
*   [ ] **Image Generation Support:** Integrate AI-powered image generation capabilities.
*   [ ] **Syntax Highlighting:** Beautiful and functional code formatting and highlighting for code snippets in chat.
*   [ ] **Resumable Streams:** Ability for AI generation streams to continue gracefully even after a page refresh.
*   [ ] **Chat Branching:** Functionality to create and manage alternative conversation paths from a single chat history.
*   [ ] **Chat Sharing:** Enable users to easily share specific conversations with others via a public link.
*   [ ] **Web Search:** Integrate real-time web search capabilities directly into the AI chat responses.
*   [ ] **Custom Feature Ideas:** Implement additional creative features to enhance the user experience (e.g., custom AI personas, theme options, etc.).


## Licence
The project is under **AGPL-3.0-or-later** licence.