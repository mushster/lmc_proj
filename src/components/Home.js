import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const modules = [
  { id: 1, title: 'Understanding AI Biases', progress: 30 },
  { id: 2, title: 'Balancing AI and Human Expertise', progress: 0 },
  { id: 3, title: 'Privacy and Data Security', progress: 0 },
];

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Ethical AI Coding Training
      </Typography>
      <Grid container spacing={3}>
        {modules.map((module) => (
          <Grid item xs={12} sm={6} md={4} key={module.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{module.title}</Typography>
                <Typography variant="body2">Progress: {module.progress}%</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to={`/module/${module.id}`}>
                  Start Module
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;