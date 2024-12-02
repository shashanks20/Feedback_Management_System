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
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          "0xFDeBc34e70b6fdC0079155dFbb42120945EC7496", 
          abi.abi,
          signer
        );

        setState({
          provider,
          signer,
          contract,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error connecting to wallet:', error);
        setState({
          isLoading: false,
          error: 'Error connecting to wallet. Please try again.',
        });
      }
    };

    const handleChainChanged = (chainId) => {
      window.location.reload();
    };

    window.ethereum.on('chainChanged', handleChainChanged);

    connectWallet();

    return () => {
      window.ethereum.off('chainChanged', handleChainChanged);
    };
  }, []);

  return (
    <Router>
      {state.isLoading ? (
        <div>Connecting to wallet...</div>
      ) : state.error ? (
        <div>{state.error}</div>
      ) : (
        <>
          <Navbar state={state} />
          <Routes>
            <Route path="/" exact element={<Home state={state} />} />
            <Route path="/student" exact element={<Student state={state} />} />
            <Route path="/admin" exact element={<Admin state={state} />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;