import React from "react";

function Card({ feedback }) {
  const { student, feedback: feedbackText, timestamp } = feedback;

  return (
    <div className="card mt-4 p-4 bg-white rounded shadow">
      <div className="card-header">
        <h2 className="text-xl font-bold text-pink-600">Feedback Details</h2>
      </div>
      <div className="card-body">
        <ul>
          <li><strong>Student Address:</strong> {student}</li>
          <li><strong>Feedback:</strong> {feedbackText}</li>
          <li><strong>Timestamp:</strong> {new Date(timestamp * 1000).toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
