import React from 'react';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

// eslint-disable-next-line react/prop-types
const BackButton = ({ route }) => {
  return (
    <>
      <Button href={route} style={{ marginBottom: '0.8rem', borderRadius: '20px' }}>
        <ArrowBack color="secondary" style={{ fontSize: '30px' }} />
      </Button>
    </>
  );
};

export default BackButton;
