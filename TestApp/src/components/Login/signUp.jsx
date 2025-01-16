import  { useState } from 'react';
import { Button, TextField, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        // Redirect to the login page on successful sign-up
        navigate('/login');
      } else {
        setError(result.error || 'Sign-up failed.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.',error);
    }
  };

  const handleLoginRedirect = () => {
    // Redirect to the Login page
    navigate('/');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: '50px auto', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>Sign Up</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSignUp}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '15px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: '15px' }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth type="submit" sx={{ marginBottom: '10px' }}>
          Sign Up
        </Button>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="text" color="primary" onClick={handleLoginRedirect}>
          Already have an account? Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
