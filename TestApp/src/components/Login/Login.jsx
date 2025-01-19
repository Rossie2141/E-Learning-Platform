import { useState } from 'react';
import { Button, TextField, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: '50px auto', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>Login</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '15px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: '15px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth type="submit" sx={{ marginBottom: '15px' }}>
          Login
        </Button>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="text" color="primary" onClick={handleSignUpRedirect} sx={{ marginRight: '10px' }}>
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
