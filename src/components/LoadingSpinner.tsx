import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      position="absolute" // Position it absolutely within the parent container
      top={0} 
      left={0}
      width="100%" 
      height="100%" // Cover the entire form area
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgba(255, 255, 255, 0.7)" // Optional: add a semi-transparent background
    >
      <CircularProgress size={60} />
    </Box>
  );
};

export default LoadingSpinner;
