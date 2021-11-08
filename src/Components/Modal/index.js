import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  text:{
      marginLeft:theme.spacing(5),
      marginTop:theme.spacing(2),
      marginRight:theme.spacing(5)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const classes = useStyles();
//   console.log('prop',props.open)
//   const [open, setOpen] = React.useState(props.open);
//   console.log('data',props.data)
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//  console.log('open',open)
  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{color:'white'}} className={classes.title}>
            {props.data.title}
            </Typography>
            <Typography variant="subtitle2" style={{color:'white'}}>
            {props.data.sub}
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography align="center" className={classes.text}>
        {props.data.detail}
        </Typography>
        <div className='container mt-2'>
        <div className='row'>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mt-5 mb-3">
            {props.data.h1}
            </Typography>
            <Typography align="center">
            {props.data.p1}
            </Typography>
            </div>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mt-5 mb-3">
            {props.data.h2}
            </Typography>
            <Typography align="center">
            {props.data.p2}
            </Typography>
            </div>
            </div>
            <div className='row mt-5'>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mb-3">
            {props.data.h3}
            </Typography>
            <Typography align="center">
            {props.data.p3}
            </Typography>
            </div>
            <div className='col-md-6'>
            <Typography variant="h4" align="center" className="mb-3">
            {props.data.h4}
            </Typography>
            <Typography align="center">
            {props.data.p4}
            </Typography>
            </div>
        </div>
        </div>
        {props.data.features?
        <div className='container text-center'>
             <Typography variant="h4" className={classes.text}>
                 Features
             </Typography>
        <div className='row mt-5'>
            <div className='col-md-4 text-center' >
                <img style={{padding:'10px',backgroundColor:'#6a9dd3'}} src={require("../../Images/" + props.data.featureIcons.a + ".png")} />
                <Typography  className={classes.text}>
            {props.data.features.a}
            </Typography>
                </div>
                <div className='col-md-4 text-center' >
                <img style={{padding:'10px',backgroundColor:'#6a9dd3'}} src={require("../../Images/" + props.data.featureIcons.b + ".png")} />
                <Typography  className={classes.text}>
            {props.data.features.b}
            </Typography>
                </div>
                <div className='col-md-4 text-center' >
                <img style={{padding:'10px',backgroundColor:'#6a9dd3'}} src={require("../../Images/" + props.data.featureIcons.c + ".png")} />
                <Typography className={classes.text}>
            {props.data.features.c}
            </Typography>
                </div>
                
                </div>
                
        </div>:""
}
      </Dialog>
    </div>
  );
}
