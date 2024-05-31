import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Student from './student';
import Footer from './footer';
import Admin from './admin';
import abi from "./contract/Feedback.json"; 
import { ethers } from 'ethers';

const App = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
    isLoading: false,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xba6DD0b80E5139B449d76B4732BA5b92A19F0f3c";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract, isLoading: false });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        alert("An error occurred while connecting to your wallet. Please try again.");
      } finally {
        setState((prevState) => ({ ...prevState, isLoading: false }));
      }
    };

    connectWallet();
  }, []);

  return (
    <Router>
      {state.isLoading && <div>Connecting to wallet...</div>}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home state={state} />} />
        <Route path="/student" exact element={<Student state={state} />} />
        <Route path="/admin" exact element={<Admin state={state} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
