# Web Chatbot Project
### [Project Deploy](https://web-chatbot-production.up.railway.app/)

Welcome to the Web Chatbot Project! This project is designed to provide a user-friendly chatbot interface that can assist users with information about loans. The chatbot is built with the following features:

## Features

1. **Conversation Initialization:**

   - The chatbot can initiate a conversation thread upon receiving the terms "Hello", "Good" or "I want" from the user.
   - To continue the conversation, users need to register a username and password.
---

2. **Parameterized Authentication:**

   - The username and password are required for accessing the conversation.
   - The username must be greater or equal than 12 characters.
   - The password must be greater or equal than 6 characters.
---

3. **Loan Information:**

   - When the user mentions "loan," the chatbot displays three options:
     - "Do you want to apply for a loan?"
     - "Loan conditions"
     - "Help"
   - Each option provides relevant information with a link for further reference.
---

4. **Conversation Completion and Storage:**

   - The terms "Goodbye", "Bye" or "See you later" is used by users to indicate the end of the conversation.
   - Upon receiving one that terms, the chatbot concludes the conversation and stores it in the database.
---

5. **Conversation History Export:**
   - A dedicated page is provided to export historic conversations in CSV format.
   - When user says "historic" in chat, will be redirected to history page to download all chat history.
   - The conversations are ordered by date and time, with a timestamp indicating when the user used a conversation termination term, like "Goodbye".
---

## Usage

1. **Setting Up:**

   - Clone this repository to your local machine.
<br />
<br />


2. **Running the Chatbot:**

   - Start the chatbot application using the provided command: `npm start` (or any relevant command).

   1. Clone the repository
    - Enter the repository folder you just cloned:
   * `cd web-chatbot`

   2. Start the chatbot application in Docker using the provided command:
   * `npm run compose:up`

   3. Access localhost
   * `http://localhost:3000/`
<br />
<br />


3. **Interacting with the Chatbot:**

   - Access the chatbot through the provided web interface.
   - Use the terms "Hello", "Good" or "I want" to initiate a conversation.
   - Provide the required username and password to continue the conversation.
   - Explore loan-related options and information as needed.
<br />
<br />


4. **Exporting Conversations:**
   - Navigate to the conversation history export page.
   `http://localhost:3000/historic`

   - Click the export button to download the CSV file containing conversation history.
<br />
<br />


5. **Messages in Database**
   - To see the messages that are stored in the database:
   `http://localhost:3001/messages`
<br />
<br />


## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js, Sequelize
- Database: MySQL
- Docker


## Contributing

We welcome contributions to enhance the functionality and user experience of the chatbot. If you'd like to contribute, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](LICENSE).
