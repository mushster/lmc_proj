import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const challenges = [
  {
    id: 1,
    title: "Job Role Recommendation",
    description: "Write a function that recommends a job role based on a person's skills. Be mindful of potential biases in your code.",
    initialCode: "function recommendJobRole(skills) {\n  // Your code here\n}",
  },
  {
    id: 2,
    title: "AI-powered Content Moderation",
    description: "Implement a content moderation function that uses AI to flag inappropriate content. Consider ethical implications of automated moderation.",
    initialCode: "function moderateContent(text) {\n  // Your code here\n}",
  },
  {
    id: 3,
    title: "Facial Recognition Ethics",
    description: "Design a facial recognition system that respects privacy and avoids bias. Consider data handling and potential misuse.",
    initialCode: "class FacialRecognitionSystem {\n  constructor() {\n    // Your code here\n  }\n\n  recognize(image) {\n    // Your code here\n  }\n}",
  },
  {
    id: 4,
    title: "Ethical Data Collection",
    description: "Create a function to collect user data for a social media app. Ensure compliance with privacy regulations and ethical data handling practices.",
    initialCode: "function collectUserData(user) {\n  // Your code here\n}",
  }
];

function Challenge() {
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [code, setCode] = useState(selectedChallenge.initialCode);
  const [feedback, setFeedback] = useState('');

  const handleChallengeChange = (event) => {
    const newChallenge = challenges.find(c => c.id === event.target.value);
    setSelectedChallenge(newChallenge);
    setCode(newChallenge.initialCode);
    setFeedback('');
  };

  const handleSubmit = () => {
    switch(selectedChallenge.id) {
      case 1:
        if (code.toLowerCase().includes('gender') || code.toLowerCase().includes('race')) {
          setFeedback('Caution: Your code may contain bias based on protected characteristics. Consider using more inclusive criteria.');
        } else {
          setFeedback('Good start! Make sure you are considering a diverse range of skills and avoiding assumptions about job roles.');
        }
        break;
      case 2:
        if (code.toLowerCase().includes('ai.analyze') || code.toLowerCase().includes('machinelearning')) {
          setFeedback('Good use of AI! Remember to include human oversight and appeals process for content moderation decisions.');
        } else {
          setFeedback('Consider how AI can assist in content moderation while maintaining ethical standards and avoiding censorship.');
        }
        break;
      case 3:
        if (code.toLowerCase().includes('consent') && code.toLowerCase().includes('encrypt')) {
          setFeedback('Excellent! You are considering user consent and data protection. Also think about data retention policies and user control over their data.');
        } else {
          setFeedback('Remember to address issues of user consent, data encryption, and potential biases in facial recognition algorithms.');
        }
        break;
      case 4:
        if (code.toLowerCase().includes('gdpr') || code.toLowerCase().includes('consent')) {
          setFeedback('Great start on compliance! Also consider data minimization principles and clear communication about data usage to users.');
        } else {
          setFeedback('Ensure you are following relevant privacy regulations and obtaining proper user consent for data collection.');
        }
        break;
      default:
        setFeedback('Code submitted for review.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Ethical Coding Challenges</Typography>
      
      <FormControl fullWidth style={{ marginBottom: '20px' }}>
        <InputLabel>Select Challenge</InputLabel>
        <Select
          value={selectedChallenge.id}
          onChange={handleChallengeChange}
        >
          {challenges.map((challenge) => (
            <MenuItem key={challenge.id} value={challenge.id}>{challenge.title}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="body1" paragraph>
        {selectedChallenge.description}
      </Typography>
      
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          fullWidth
          multiline
          rows={10}
          variant="outlined"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </Paper>
      
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit for Review
      </Button>
      
      {feedback && (
        <Typography style={{ marginTop: '20px' }} color="secondary">
          {feedback}
        </Typography>
      )}
    </div>
  );
}

export default Challenge;