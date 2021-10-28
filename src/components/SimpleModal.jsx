import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import { Modal, Box, Typography, } from '@mui/material';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: props => props.width || "60%",
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #DCDCDC',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 2, 1, 2),
    overflow:'auto',
    maxHeight:'90%',
  },
}));

const SimpleModal = (props) =>  {
  const classes = useStyles(props);
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.onClose}
      >

        <div style={modalStyle} className={classes.paper} tabIndex={""}>
          <div className="float-right">
            <button 
              onClick={props.onClose}
              type="button"
              className="btn btn-outline-0"
            >
              <i className="icon-cross" />
            </button>
          </div>
          <div className="clearfix" />        
          { props.children }
        </div>
        
      </Modal>
    </div>
  );
};

export default  SimpleModal;