import React from 'react';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button onClick={goBack} style={{ borderRadius: '20px', marginLeft: '-30px' }}>
        <ArrowBack color="primary" style={{ fontSize: '30px' }} />
      </Button>
    </>
  );
};

export default BackButton;
