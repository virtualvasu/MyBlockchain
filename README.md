# MyBlockchain - Blockchain Network Project

This project implements a basic blockchain network using JavaScript. It follows blockchain principles like immutability, data integrity, and linking blocks with hashes. The project also includes a React.js frontend to interact with the blockchain via APIs.

## Features

- **Blockchain Network**: The core of the project uses blocks linked with hashes, ensuring data integrity and immutability.
  
- **OOP Design**: Built using Object-Oriented Programming (OOP), with classes for `Chain`, `Block`, and other components.

- **Immutability**: Once data is added to a block, it cannot be changed. Each block’s hash links to the previous one, preventing tampering.

- **SHA256 Hashing**: Blocks are linked using SHA256 hashing to ensure data integrity.

- **Express.js Backend**: API endpoints for:
  - Adding blocks.
  - Viewing the blockchain.
  - Fetching the latest block.

- **React.js Frontend**: Provides a user interface to interact with the blockchain via the API.

## Technologies Used

- **JavaScript**: Used for the entire blockchain network with OOP principles.
- **SHA256**: For hashing blocks and ensuring data integrity.
- **Express.js**: For building the backend API.
- **React.js**: For the frontend interface.

## API Endpoints

1. **POST /addBlock**  
   Adds a new block.  
   - Request: `{ "data": "Your data here" }`  
   - Response: `200 OK` with the new block.

2. **GET /getChain**  
   Retrieves the full blockchain.  
   - Response: JSON array of all blocks.

3. **GET /getLatestBlock**  
   Retrieves the latest block.  
   - Response: JSON object of the latest block.

## Running the Project

### Backend (Express.js)

1. Clone the repo.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The backend will be available at `http://localhost:3005`.

### Frontend (React.js)

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the React server:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.
