import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, LinearProgress } from '@mui/material';

const modulesData = {
  1: {
    title: 'Understanding AI Biases',
    lessons: [
      { id: 1, title: 'Introduction to AI Bias', completed: true },
      { id: 2, title: 'Types of AI Bias', completed: false },
      { id: 3, title: 'Mitigating AI Bias', completed: false },
    ],
  },
};

function Module() {
  const { id } = useParams();
  const module = modulesData[id];

  if (!module) {
    return <Typography>Module not found</Typography>;
  }

  const progress = (module.lessons.filter(lesson => lesson.completed).length / module.lessons.length) * 100;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>{module.title}</Typography>
      <LinearProgress variant="determinate" value={progress} style={{ marginBottom: '20px' }} />
      <List>
        {module.lessons.map((lesson) => (
          <ListItem key={lesson.id} button>
            <ListItemText primary={lesson.title} secondary={lesson.completed ? 'Completed' : 'Not started'} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Module;