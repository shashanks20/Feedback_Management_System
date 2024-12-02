import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import abi from "./contract/Feedback.json";

function Admin({ state }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [contract, setContract] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);

  const subjects = [
    "Management & Entrepreneurship",
    "Web Technologies Laboratory",
    "Unix System Programming Laboratory",
    "Cloud Computing and Big Data",
    "Block Chain and Distributed App Development",
    "Introduction to Devops",
  ];

  const selectedSubjectRef = useRef("");

  useEffect(() => {
    const contractAddress = "0xFDeBc34e70b6fdC0079155dFbb42120945EC7496";
    const contractABI = abi.abi;

    if (contractAddress && contractABI) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const newContract = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(newContract);
    }
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        if (contract && selectedSubjectRef.current) {
          const feedbacks = await contract.getFeedback(selectedSubjectRef.current);
          setFeedbacks(feedbacks);
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, [contract, selectedSubject]);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    selectedSubjectRef.current = e.target.value;
  };

  const renderFeedbacks = () =>
    feedbacks.map((feedback, index) => (
      <div className="card mt-4 p-4 bg-white rounded shadow" key={index}>
        <div className="card-header">
          <h2 className="text-xl font-bold text-pink-600">Feedback Details</h2>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <strong>Student Address:</strong> {feedback.student}
            </li>
            <li>
              <strong>Feedback:</strong> {feedback.feedback}
            </li>
            <li>
              <strong>Timestamp:</strong>{" "}
              {new Date(feedback.timestamp * 1000).toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    ));

  return (
    <div className="p-4">
      <select
        value={selectedSubject}
        onChange={handleSubjectChange}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select a Subject</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
      {contract && selectedSubject && (
        <div>
          <h2>Subject Feedback</h2>
          {renderFeedbacks()}
        </div>
      )}
    </div>
  );
}

export default Admin;
