import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const currentUser = {
  name: "You",
  score: 1850,
  challenges: 11
};

const leaderboardData = [
  { rank: 1, name: "Alice Johnson", score: 2500, challenges: 15 },
  { rank: 2, name: "Bob Smith", score: 2300, challenges: 14 },
  { rank: 3, name: "Charlie Brown", score: 2100, challenges: 13 },
  { rank: 4, name: "Diana Prince", score: 2000, challenges: 12 },
  { rank: 5, name: "Ethan Hunt", score: 1900, challenges: 11 },
  { rank: 6, name: "Fiona Apple", score: 1800, challenges: 10 },
  { rank: 7, name: "George Lucas", score: 1700, challenges: 9 },
  { rank: 8, name: "Hannah Montana", score: 1600, challenges: 8 },
  { rank: 9, name: "Ian McKellen", score: 1500, challenges: 7 },
  { rank: 10, name: "Julia Roberts", score: 1400, challenges: 6 },
];

function insertCurrentUser(leaderboard, user) {
  const newLeaderboard = [...leaderboard];
  let userRank = newLeaderboard.length + 1;

  for (let i = 0; i < newLeaderboard.length; i++) {
    if (user.score > newLeaderboard[i].score) {
      userRank = i + 1;
      break;
    }
  }

  newLeaderboard.splice(userRank - 1, 0, { ...user, rank: userRank });

 
  return newLeaderboard.map((entry, index) => ({ ...entry, rank: index + 1 }));
}

function Leaderboard() {
  const updatedLeaderboard = insertCurrentUser(leaderboardData, currentUser);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Challenges Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updatedLeaderboard.map((row) => (
              <TableRow 
                key={row.rank}
                style={row.name === "You" ? { backgroundColor: '#e3f2fd' } : {}}
              >
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.challenges}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Leaderboard;