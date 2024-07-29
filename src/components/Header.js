import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            EthicAI
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/challenge">
          Challenges
        </Button>
        <Button color="inherit" component={Link} to="/leaderboard">
          Leaderboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;