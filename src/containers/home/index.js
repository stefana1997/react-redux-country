import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import CountryDetail from '../../components/CountryDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing(10)
  },
  button: {
    position: 'fixed',
    right: 50,
    bottom: 20
  }
}));

const Home = () => {
  const classes = useStyles();
  const country = useSelector(state => state.country.country)

  return (
    <div className={classes.root}>
      {country ? <CountryDetail country={country} /> : 'Select country to see detail'}
    </div>
  );
};

export default Home;
