# Feedback Management System

## Introduction

Educational institutions often struggle with managing student feedback effectively. Traditional feedback systems involve intermediaries (e.g., faculty, administrators) who collect and validate feedback. This centralized approach can lead to delays, lack of transparency, and potential biases. Feedback data can also be altered or lost due to manual handling or centralized databases. This project aims to provide a decentralized solution to ensure the integrity, transparency, and security of feedback data using blockchain technology.

## Key Problems Addressed

### 1. **Centralization and Intermediaries**
   - Traditional systems rely on intermediaries such as faculty and administrators to collect and validate feedback.
   - This centralized approach can result in delays, lack of transparency, and potential biases.

### 2. **Data Manipulation and Integrity**
   - Feedback data can be altered or lost due to manual handling or centralized databases.
   - Ensuring the integrity and security of feedback records is crucial.

### 3. **Trust and Transparency**
   - Students and faculty need a system they can trust.
   - Transparency in feedback collection, storage, and analysis is vital.

## Technologies Used

- **Solidity**: Smart contract development for handling feedback data.
- **Alchemy & MetaMask**: For blockchain interaction.
- **Unichain Sepolia Testnet**: A blockchain network used to test the application before deploying it to the main network.
- **Hardhat**: For smart contract development and deployment.
- **React**: For frontend UI to interact with the blockchain.

## How to Run the Project

1. npx hardhat compile
2. npx hardhat run --network unichain scripts/deploy.js
3. npx hardhat


4. cd feedback-system
5. npm init
6. npm i
7. npm start
