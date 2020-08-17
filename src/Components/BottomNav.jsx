/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0);
  const FirstIcon = props.firstIcon;
  const SecondIcon = props.secondIcon;
  const { firstIconOnClick, secondIconOnClick } = props;
  return (
    <BottomNavigation value={value} showLabels className={classes.stickToBottom}>
      <BottomNavigationAction
        label="Agregar Privilegio"
        icon={<FirstIcon />}
        onClick={firstIconOnClick}
      />
      <BottomNavigationAction
        label="Remover Privilegio"
        icon={<SecondIcon />}
        onClick={secondIconOnClick}
      />
    </BottomNavigation>
  );
}
