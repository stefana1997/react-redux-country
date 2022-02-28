import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Subtitle, Tiny, TinyBold, Caption, Title } from './Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    // padding: theme.spacing(0, 2),
  },
  element: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
}));

const CountryDetail = ({
  country
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <div className={classes.element}><Caption>Capital: </Caption><Title>{` ${country.capital}`}</Title></div>
      <div className={classes.element}><Caption>Population: </Caption><Title>{` ${country.population ? country.population : 'N/A'}`}</Title></div>
      <div className={classes.element}><Caption>Alpha2Code: </Caption><Title>{` ${country.alpha2Code}`}</Title></div>
      <div className={classes.element}><Caption>Flag: </Caption>{country?.flag ? <img src={country?.flag} alt='country-flag'/> : <Title>{'N/A'}</Title>}</div>
    </div>
  );
};


export default CountryDetail;
