import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
