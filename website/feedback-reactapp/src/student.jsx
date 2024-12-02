import React, { useState, useRef } from 'react';

const Student = ({ state }) => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedSubjectRef = useRef(null);
  const feedbackRef = useRef(null);

  const subjects = [
    "Management & Entrepreneurship",
    "Web Technologies Laboratory",
    "Unix System Programming Laboratory",
    "Cloud Computing and Big Data",
    "Block Chain and Distributed App Development",
    "Introduction to Devops",
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const selectedSubject = selectedSubjectRef.current.value;
      const feedback = feedbackRef.current.value;

      if (!selectedSubject) {
        alert('Please select a subject');
        setIsLoading(false);
        return;
      }
      if (!feedback) {
        alert('Please enter your feedback');
        setIsLoading(false);
        return;
      }

      const { signer, contract } = state;

      if (!signer || !contract) {
        alert('Error: Ethereum provider not available.');
        setIsLoading(false);
        return;
      }

      const transaction = await contract.submitFeedback(selectedSubject, feedback);
      await transaction.wait();

      console.log(`Feedback submitted successfully for subject: ${selectedSubject}`);
      alert('Feedback submitted successfully!');

      selectedSubjectRef.current.value = '';
      feedbackRef.current.value = '';
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      alert('Error submitting feedback: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="student-container p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Feedback</h2>

      <select
        ref={selectedSubjectRef}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select a Subject</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      <textarea
        ref={feedbackRef}
        placeholder="Enter your feedback"
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleSubmit}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </div>
  );
};

export default Student;