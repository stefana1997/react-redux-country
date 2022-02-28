import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Body, Tiny } from '../Typography';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    '& h2': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 18,
      letterSpacing: 1.3,
      fontWeight: 700,
    },
  },
  body: {
    paddingBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(0, 3),
    marginTop: theme.spacing(-1),
    paddingBottom: theme.spacing(2),
  },
  items: {
    padding: '16px 0',
  },
  close: {
    fontSize: theme.spacing(2),
    color: theme.palette.surface[4],
    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputContainer: {
    padding: theme.spacing(3, 0),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputLabel: {
    marginRight: theme.spacing(3),
  },
  foot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));


const OfferModal = ({
  isOpen,
  handleClose,
  onHandle,
}) => {
  const classes = useStyles();

  const handleSend = () => {
    onHandle();
    handleClose();
  };

  return (
    <Dialog
      className={classes.root}
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle className={classes.title}>
        Send Offer
        <CloseIcon
          className={classes.close}
          onClick={handleClose}
        />
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Body className={classes.body}>
          <FormControl>
            <Tiny id="">Period</Tiny>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="3" control={<Radio />} label="3 days" />
              <FormControlLabel value="7" control={<Radio />} label="7 days" />
              <FormControlLabel value="14" control={<Radio />} label="14 days" />
            </RadioGroup>
          </FormControl>
          <div className={classes.inputContainer}>
            <Tiny className={classes.inputLabel}>Price(€)</Tiny>
            <TextField 
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
        </Body>
        <div className={classes.foot}>
          <div></div>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            className={classes.button}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

OfferModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  onHandle: PropTypes.func,
};

OfferModal.defaultProps = {
  isOpen: false,
  onHandle: () => null,
  handleClose: () => null,
};

export default OfferModal;
