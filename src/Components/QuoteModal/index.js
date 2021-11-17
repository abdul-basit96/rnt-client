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

export default function QuoteModal(props) {
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
            Get a Quotation
            </Typography>
            <Typography variant="subtitle2" style={{color:'white'}}>
            sub head
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container-fluid bg-white mt-3 py-4 ">
        <div className="row">
          <div className="col-md-8 mx-auto contact-form p-5">
            <div className="form-heading">
              <h1>Contact us</h1>
              <h6 className="mt-3 ml-5 mr-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </h6>
            </div>
            <form action="sendmail.php" method="POST">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputSubject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  name="subject"
                  placeholder="Message related to "
                  required
                />
              </div>
              <div className="form-group">
                <label for="inputMessage">Message</label>
                <textarea
                  type="text"
                  col="6"
                  required
                  className="form-control"
                  id="inputMessage"
                  name="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="btn-div">
                <button type="submit" class="btn btn-theme">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Dialog>
    </div>
  );
}
