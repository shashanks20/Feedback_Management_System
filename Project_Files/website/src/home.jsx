import React from "react";

function Home({state}) {
    const url = "https://strategyeducation.co.uk/wp-content/uploads/2020/05/The-Power-of-Feedback-Which-When-and-How.jpg" ;
       return (
        <div className="home">
            <div className="intro">
                <div className="image">
                    <img src={url} alt="img" />
                </div>
                <div className="content">
                    <h2>FeedbackChain: Empowering Transparent Student Feedback Management with Blockchain.</h2>

                    <p>FeedbackChain revolutionizes the way educational institutions manage student feedback by leveraging blockchain technology. With its decentralized and immutable nature, FeedbackChain ensures transparency, authenticity, and security in the feedback process. Say goodbye to data tampering and manipulation – with FeedbackChain, every feedback entry is securely recorded and cannot be altered, providing an accurate representation of student sentiment.</p>

                    <h3>Why Feedback Management Matters:</h3>
                    <ul>
                        <li><strong>Enhanced Accountability:</strong> Holds both students and educators accountable for feedback given and received, fostering a culture of responsibility and improvement.</li>

                        <li><strong>Improved Learning Experience:</strong> Facilitates constructive feedback loops, enabling educators to tailor their teaching methods to better meet student needs and enhance the overall learning experience.</li>

                        <li><strong>Transparent Evaluation:</strong> Ensures fairness and transparency in the evaluation process by providing a secure record of feedback data, reducing biases and promoting equity.</li>
                    </ul>

                    <h3>How FeedbackChain Works:</h3>
                    <p>FeedbackChain utilizes blockchain technology to create a decentralized ledger of student feedback entries. Each feedback submission is cryptographically secured and linked to the student's identity, ensuring authenticity and preventing tampering. Educators can access this transparent ledger to view feedback in real-time, allowing for timely interventions and improvements. By promoting transparency and accountability, FeedbackChain empowers educational institutions to cultivate a culture of continuous improvement and student satisfaction.</p>
                </div>
            </div>
        </div>

    )
}

export default Home;
