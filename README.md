# Feedback Management System

## Overview

The Feedback Management System is a decentralized application (DApp) built on the Ethereum blockchain using Solidity smart contracts. It allows students to provide feedback for subjects and courses, which are then stored securely on the blockchain. Admin users can view and analyze the feedback provided by students.

This project utilizes Metamask for wallet management and interaction with the Ethereum blockchain. It is deployed on the Sepolia testnet for testing purposes.

## Features

- **Student Feedback Submission**: Students can submit feedback for subjects and courses they have completed.
- **Admin Dashboard**: Admin users can view and analyze the feedback provided by students.
- **Decentralized and Secure**: Feedback data is stored securely on the Ethereum blockchain, ensuring immutability and transparency.
- **Metamask Integration**: Integration with Metamask allows for seamless interaction with the Ethereum blockchain.


### Student

1. Connect your Metamask wallet to the Sepolia testnet.
2. Navigate to the Feedback Submission page.
3. Select the subject or course you want to provide feedback for.
4. Fill out the feedback form and submit it.
5. Your feedback will be recorded on the blockchain.

### Admin

1. Connect your Metamask wallet to the Sepolia testnet.
2. Navigate to the Admin Dashboard.
3. View the feedback provided by students for various subjects and courses.
4. Analyze the feedback data as needed.

## Technologies Used

- Ethereum Blockchain
- Solidity
- Metamask
- React.js
- Sepolia Testnet

# Project Setup Instructions

## 1. Smart Contracts

### Step 1: Navigate to the Project Directory
```bash
cd project_files
```

### Step 2: Compile the Smart Contracts
```bash
npx hardhat compile
```

### Step 3: Deploy the Smart Contracts to the Goerli Testnet
```bash
npx hardhat run --network goerli scripts/deploy.js
```

### Step 4: Start the Hardhat Environment
```bash
npx hardhat
```

## 2. Frontend (React Application)

### Step 1: Create the React App
```bash
npx create-react-app website
```

### Step 2: Navigate to the `website` Directory
```bash
cd website
```

### Step 3: Initialize the npm Project
```bash
npm init
```

### Step 4: Install Necessary Dependencies
```bash
npm i
```

### Step 5: Start the React Development Server
```bash
npm start
```

### Step 6: Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

Follow these steps to set up and run the smart contracts and the frontend React application.


