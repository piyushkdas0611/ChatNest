import React from "react";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import loginImg from "../Assets/login.png";
import Topography from "@material-ui/core/Typography";
import { auth, provider } from "../Firebase/Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 15px rgb(7 15 63 / 33%)",
    backgroundColor: "rgb(131,58,180)",
    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(110,95,193,1) 50%, rgba(172,163,230,1) 100%)",
    color: "white",
    borderRadius: "25px",
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "25px",
    paddingTop: "35px",
  },
  mainImg: {
    width: "100%",
    height: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "blue",
    backgroundColor: "white",
    transition: 'all 1s',
    borderRadius: '25px',
    '&:hover': {
      color: "blue",
    backgroundColor: "white",
      scale: '1.2',
      transition: 'all 1s'
    },
  },
}));

function SignUp() {
  const classes = useStyles();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="div" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <img src={loginImg} className={classes.mainImg} alt="signup img" />
        <Topography variant="h4" style={{ paddingTop: "15px" }}>
          Sign In To ChatNest
        </Topography>
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          startIcon={<FcGoogle />}
          onClick={login}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  );
}

export default SignUp;
