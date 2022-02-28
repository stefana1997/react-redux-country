/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import CustomDrawer from './Drawer';
import { DrawerContextProvider } from '../../context/drawer-context';
import CountryActions from "../../store/country/action"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  main: {
    flex: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CountryActions.getCountries())
  }, [dispatch])

  return (
    <DrawerContextProvider>
      
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
          <CustomDrawer />
          <main className={classes.main}>{children}</main>
        </div>
      </div>
    </DrawerContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
