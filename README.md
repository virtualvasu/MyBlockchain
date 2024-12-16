# MyBlockchain - Blockchain Network Project

This project implements a basic blockchain network using JavaScript. It follows blockchain principles like immutability, data integrity, and linking blocks with hashes. The project includes a user-friendly website to interact with the blockchain.

## Features

- **Blockchain Network**: The core of the project uses blocks linked with hashes, ensuring data integrity and immutability.
  
- **OOP Design**: Built using Object-Oriented Programming (OOP), with classes for `Chain`, `Block`, and other components.

- **Immutability**: Once data is added to a block, it cannot be changed. Each block’s hash links to the previous one, preventing tampering.

- **SHA256 Hashing**: Blocks are linked using SHA256 hashing to ensure data integrity.

- **API-Driven Backend**: The blockchain network is powered by APIs for:
  - Adding blocks.
  - Viewing the blockchain.
  - Fetching the latest block.

- **React.js Frontend**: Provides a user-friendly interface to interact with the blockchain via the API.

## Technologies Used

- **JavaScript**: Used for the entire blockchain network with OOP principles.
- **SHA256**: For hashing blocks and ensuring data integrity.
- **Express.js**: For building the backend API.
- **React.js**: For the frontend interface.

## How to Use

Visit the website to interact with the blockchain network:
[**MyBlockchain Website**]([https://your-hosted-website.com](https://myblockchain-frontend.onrender.com/))

### Available Features:
1. **Add a Block**: Submit data to create a new block in the blockchain.
2. **View the Blockchain**: View the entire blockchain and its details.
3. **Get the Latest Block**: Fetch details of the most recently added block.

## API Endpoints (for Developers)

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

## Deployment

The project is hosted online, so there's no need for users to install dependencies or run local servers. Just visit the website to start using the blockchain network.

---
