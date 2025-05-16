import  { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "./firebase/firebase";
import { useSnackbar } from "notistack";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/authcontext";

function SignIn() {
  const { enqueueSnackbar } = useSnackbar();
        const { setUser } = useUser();
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isStep1, setIsStep1] = useState(true);
  const handleSignIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUser({email:email})
        localStorage.setItem("email",email);
        enqueueSnackbar("user login successfully!", { variant: "success" });
        navigate("/home")
      })
      .catch((error) => {
        const errorMessage = error.message;
        enqueueSnackbar(errorMessage, { variant: "error" });

        // ..
      });
  };
   const handleSignUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up
        // const user = userCredential.user;
        // ...
        setUser({email:email})
        localStorage.setItem("email",email);
        enqueueSnackbar("user create successfully!", { variant: "success" });
        navigate("/home")
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        enqueueSnackbar(errorMessage, { variant: "error" });

        // ..
      });
  };
  return (
    <>
      {isStep1 ? (
        <div className="step1">
          <Navbar />
          <Box
            sx={{
              width: "100%",
              mt: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">CATCH THE FAKE</Typography>
            <Typography variant="body1">
              <span style={{ paddingLeft: "1rem", display: "inline-block" }}>
                Beware of Fraud Messages!
              </span>
              <br />
              Spot the fraud and collect points.
            </Typography>
            <Button
              className="Button"
              sx={{ mt: 16 }}
              onClick={() => {
                setIsStep1(false);
                setIsLoginForm(true);
              }}
            >
              Login
            </Button>
          </Box>
        </div>
      ) : (
        <div className="login">
          <Navbar />
          {isLoginForm ? (
            <Box
              sx={{
                width: "100%",
                mt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="loginbox"
            >
              <Typography variant="h5">Log In</Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="buttonclass">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={(e) => {
                      handleSignIn(e);
                    }}
                    className="Button"
                  >
                    Next
                  </Button>
                </div>
                <Typography sx={{ mt: 2 }}>
                  Don't have an account?{" "}
                  <Button
                    onClick={() => {
                      setIsLoginForm(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                mt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="loginbox"
            >
              <Typography variant="h5">Register</Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  name="name"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />

                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                >
                  <Grid size={{ xs: 12, md: 6, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      margin="normal"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone"
                      margin="normal"
                      // name="email"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      margin="normal"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      margin="normal"
                      // name="password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <div className="buttonclass">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={(e) => {
                      handleSignUp(e);
                    }}
                    className="Button"
                  >
                    Sign Up
                  </Button>
                </div>
                <Typography sx={{ mt: 2 }}>
                  Already have an account?{" "}
                  <Button
                    onClick={() => {
                      setIsLoginForm(true);
                    }}
                  >
                    Login
                  </Button>
                </Typography>
              </Box>
            </Box>
          )}
        </div>
      )}
    </>
  );
}

export default SignIn;
