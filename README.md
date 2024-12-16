# Blockchain Network Project - MyBlockchain

This project implements a basic blockchain network using JavaScript. It follows the fundamental principles of a blockchain, such as immutability, data integrity, and block chaining. The project also includes a frontend interface built with React.js to interact with the blockchain network via RESTful APIs.

## Project Features

- **Blockchain Network**: The core of the project is a blockchain that uses blocks to store data. The blocks are linked together using hashes, ensuring the integrity and immutability of the data.
  
- **OOP Design**: The blockchain network is built using Object-Oriented Programming (OOP) concepts. Classes are created for the blockchain (`Chain`), blocks (`Block`), and other essential components.

- **Immutability**: Once data is added to a block, it cannot be changed, ensuring the integrity of the data. Each block has a hash, and the hash of each block is linked to the previous block, making it impossible to alter data without breaking the chain.

- **SHA256 Hashing**: SHA256 hashing is used to link blocks together and ensure the integrity of the data stored in the blockchain.

- **Express.js Backend**: The backend of the blockchain network is built using Express.js, providing API endpoints to interact with the blockchain. These endpoints allow you to:
  - Add new blocks to the blockchain.
  - View the entire blockchain.
  - Retrieve the latest block in the blockchain.

- **React.js Frontend**: The frontend is developed using React.js. It provides an interface to interact with the blockchain network through the APIs. The frontend includes features like:
  - Viewing the blockchain in a user-friendly manner.
  - Adding new blocks to the chain.
  - Fetching the latest block from the blockchain.

## Technologies Used

- **JavaScript**: The entire blockchain network is built using JavaScript, utilizing Object-Oriented Programming (OOP) principles.
- **SHA256**: Secure hashing algorithm used to link blocks and ensure data integrity.
- **Express.js**: Framework used for building the backend API.
- **React.js**: JavaScript library used for building the frontend interface.

## API Endpoints

1. **POST /addBlock**  
   Adds a new block to the blockchain.
   - Request Body: `{ "data": "Your data here" }`
   - Response: `200 OK` with the newly added block.

2. **GET /getChain**  
   Retrieves the entire blockchain.
   - Response: JSON array of all blocks in the chain.

3. **GET /getLatestBlock**  
   Retrieves the latest block in the blockchain.
   - Response: JSON object representing the latest block.

## How to Run the Project

### Backend (Express.js)

1. Clone the repository.
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
   The backend will be running on `http://localhost:3005`.

### Frontend (React.js)

1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will be running on `http://localhost:3000`.
