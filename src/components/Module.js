import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, LinearProgress, Paper, Box, Button } from '@mui/material';
import overviewUnderstanding from '../images/overview_understanding.png';
import typesBias from '../images/types_bias.png';
import mitigatingBias from '../images/mitigating_bias.png';
import aiDecisions from '../images/1_ai_in_decisions.png';
import humanOversight from '../images/2_human_oversight.webp';
import aiHumanCollaboration from '../images/3_ai_human_collaboration.jpeg';
import dataPrivacy from '../images/4_data_privacy.jpeg';
import encryption from '../images/5_encryption.jpeg';
import gdpr from '../images/6_gdpr.avif';


const modulesData = {
  1: {
    title: 'Understanding AI Biases',
    lessons: [
      { 
        id: 1, 
        title: 'Introduction to AI Bias', 
        completed: true,
        content: `AI bias refers to systematic errors in AI systems that can lead to unfair outcomes. These biases often stem from:

        1. Training Data Bias: When the data used to train AI models is not representative of all groups.
        2. Algorithm Bias: When the AI algorithm itself has built-in biases due to its design or assumptions.
        3. Interaction Bias: When the way users interact with the AI system introduces or amplifies biases.

        Understanding these sources is crucial for developing ethical AI systems.`
      },
      { 
        id: 2, 
        title: 'Types of AI Bias', 
        completed: true,
        content: `Common types of AI bias include:

        • Demographic Bias: Favoring certain demographic groups over others.
        • Sampling Bias: When the training data doesn't represent the population it's meant to serve.
        • Measurement Bias: When the features or labels used are inappropriate or mismeasured.
        • Aggregation Bias: When false conclusions are drawn from the grouping of data.

        Recognizing these types helps in identifying and mitigating biases in AI systems.`
      },
      { 
        id: 3, 
        title: 'Mitigating AI Bias', 
        completed: true,
        content: `Strategies for mitigating AI bias include:

        1. Diverse and Representative Data: Ensure training data covers a wide range of demographics and scenarios.
        2. Regular Audits: Continuously test AI systems for biases using various metrics and test cases.
        3. Bias-aware Algorithm Design: Implement algorithms that actively correct for known biases.
        4. Transparency: Make AI decision-making processes interpretable and explainable.
        5. Interdisciplinary Teams: Include diverse perspectives in AI development teams.`
      },
    ],
    description: "This module explores the critical issue of bias in AI systems. You'll learn about the various types of AI bias, their origins, and their potential impacts. The course covers strategies for identifying and mitigating bias, as well as case studies of real-world AI bias incidents."
  },
  2: {
    title: 'Balancing AI and Human Expertise',
    lessons: [
      {
        id: 1,
        title: 'The Role of AI in Decision Making',
        completed: true,
        content: `AI's role in decision-making processes:

        1. Data Analysis: AI excels at processing large datasets and identifying patterns.
        2. Prediction: AI models can forecast trends and outcomes based on historical data.
        3. Automation: AI can handle routine decisions, freeing humans for complex tasks.
        4. Augmentation: AI can provide insights and recommendations to support human decision-makers.

        Understanding these roles is crucial for effective AI integration in various fields.`
      },
      {
        id: 2,
        title: 'Human Oversight in AI Systems',
        completed: false,
        content: `Key aspects of human oversight in AI systems:

        • Interpretability: Ensuring AI decisions can be understood and explained by humans.
        • Accountability: Establishing clear responsibility for AI-assisted decisions.
        • Intervention Mechanisms: Implementing ways for humans to override or correct AI decisions.
        • Continuous Monitoring: Regularly assessing AI performance and potential biases.
        • Ethical Guidelines: Developing and enforcing ethical standards for AI use.

        Effective oversight ensures AI systems remain aligned with human values and objectives.`
      },
      {
        id: 3,
        title: 'Collaborative Intelligence: AI + Human',
        completed: false,
        content: `Principles of collaborative intelligence:

        1. Complementary Strengths: Leveraging AI's data processing with human intuition and creativity.
        2. Adaptive Workflows: Designing processes that seamlessly integrate AI and human inputs.
        3. Skill Augmentation: Using AI to enhance human capabilities rather than replace them.
        4. Continuous Learning: Implementing feedback loops for both AI and human improvement.
        5. Trust Building: Fostering human trust in AI systems through transparency and reliability.

        Collaborative intelligence aims to create synergies between human and artificial intelligence.`
      },
    ],
    description: "This module explores the delicate balance between leveraging AI capabilities and maintaining human expertise. You'll learn about the importance of human oversight, the concept of collaborative intelligence, and how to ethically integrate AI into decision-making processes."
  },
  3: {
    title: 'Privacy and Data Security in AI',
    lessons: [
      {
        id: 1,
        title: 'Fundamentals of Data Privacy in AI',
        completed: false,
        content: `Core concepts of data privacy in AI:

        1. Data Minimization: Collecting and retaining only necessary data.
        2. Purpose Limitation: Using data only for specified, legitimate purposes.
        3. Storage Limitation: Retaining personal data only as long as necessary.
        4. Consent Management: Obtaining and managing user consent for data processing.
        5. Data Subject Rights: Respecting individuals' rights to access, rectify, and erase their data.

        These principles form the foundation of ethical AI data practices.`
      },
      {
        id: 2,
        title: 'Encryption and Anonymization Techniques',
        completed: false,
        content: `Key techniques for protecting data in AI systems:

        • Encryption: Securing data during storage and transmission (e.g., AES, RSA).
        • Anonymization: Removing personally identifiable information from datasets.
        • Pseudonymization: Replacing personal identifiers with artificial identifiers.
        • Differential Privacy: Adding noise to data to protect individual privacy while maintaining overall utility.
        • Federated Learning: Training AI models on distributed datasets without centralizing sensitive data.

        These techniques help maintain data utility while protecting individual privacy.`
      },
      {
        id: 3,
        title: 'Compliance with Data Protection Regulations',
        completed: false,
        content: `Major data protection regulations affecting AI:

        1. GDPR (General Data Protection Regulation): EU regulation on data protection and privacy.
        2. CCPA (California Consumer Privacy Act): California's data privacy law.
        3. HIPAA (Health Insurance Portability and Accountability Act): US law for medical information privacy.
        4. PIPEDA (Personal Information Protection and Electronic Documents Act): Canadian privacy law.
        5. LGPD (Lei Geral de Proteção de Dados): Brazilian data protection law.

        Compliance with these regulations is crucial for ethical and legal AI development.`
      },
    ],
    description: "This module covers the critical aspects of maintaining privacy and ensuring data security in AI systems. You'll learn about data protection principles, encryption methods, regulatory compliance, and ethical considerations in data handling."
  }
};

const moduleImages = {
  1: [overviewUnderstanding, typesBias, mitigatingBias],
  2: [aiDecisions, humanOversight, aiHumanCollaboration],
  3: [dataPrivacy, encryption, gdpr]
};

function Module() {
  const { id } = useParams();
  const module = modulesData[id];

  if (!module) {
    return <Typography>Module not found</Typography>;
  }

  const progress = (module.lessons.filter(lesson => lesson.completed).length / module.lessons.length) * 100;

  const handleStartLesson = (lessonId) => {
    console.log(`Starting lesson ${lessonId}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>{module.title}</Typography>
      <LinearProgress variant="determinate" value={progress} style={{ marginBottom: '20px' }} />
      
      <Paper style={{ padding: '15px', marginBottom: '20px' }}>
        <Typography variant="body1">{module.description}</Typography>
      </Paper>
      
      {module.lessons.map((lesson, index) => (
        <Paper key={lesson.id} style={{ padding: '15px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>{lesson.title}</Typography>
          <Typography variant="body1" paragraph>{lesson.content}</Typography>
          
          {/* Lesson-Specific Images */}
          {moduleImages[id] && moduleImages[id][index] && (
            <img 
              src={moduleImages[id][index]} 
              alt={`Illustration for ${lesson.title}`}
              style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}
            />
          )}
          
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Typography variant="body2" color="textSecondary">
              Status: {lesson.completed ? 'Completed' : 'Not started'}
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleStartLesson(lesson.id)}
              disabled={lesson.completed}
            >
              {lesson.completed ? 'Lesson Completed' : 'Start Lesson'}
            </Button>
          </Box>
        </Paper>
      ))}
    </div>
  );
}

export default Module;

  