// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Feedback {
    struct CourseFeedback {
        address student;
        string courseId;
        string feedback;
        uint256 timestamp;
    }

    mapping(string => CourseFeedback[]) public courseFeedbacks;

    event FeedbackSubmitted(address indexed student, string courseId, string feedback, uint256 timestamp);

    function submitFeedback(string memory courseId, string memory feedback) public {
        CourseFeedback memory newFeedback = CourseFeedback({
            student: msg.sender,
            courseId: courseId,
            feedback: feedback,
            timestamp: block.timestamp
        });

        courseFeedbacks[courseId].push(newFeedback);

        emit FeedbackSubmitted(msg.sender, courseId, feedback, block.timestamp);
    }

    function getFeedback(string memory courseId) public view returns (CourseFeedback[] memory) {
        return courseFeedbacks[courseId];
    }
}
