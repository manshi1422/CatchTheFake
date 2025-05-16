import { useState } from "react";
import star from "../assets/Star.png";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { get, ref } from "firebase/database";
import { db } from "../firebase/firebase";

const GameOver = (props: any) => {
  const [leaderboardData, setLeaderboardData] = useState<any>([]);
  const [openleaderboard, setOpenLeaderboard] = useState<any>(false);
  const handleOpenLeaderboard = async () => {
    const dbref = ref(db, "scores");
    const getData = await get(dbref);
    if (getData.exists()) {
      setLeaderboardData(Object.values(getData.val()));
    }
    setOpenLeaderboard(true);
  };
  console.log(leaderboardData, "leaderboardData");

  return (
    //   <div className="step1">
    //       <Navbar />
    <>
      {openleaderboard ? (
       <> <Box
          sx={{
            width: "100%",
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="loginbox"
        >
          <Typography variant="h5">Leaderboard</Typography>
          {/* <Box sx={{ border: '2px solid #00BFFF', borderRadius: 2, overflow: 'hidden' }}> */}
          <TableContainer
            component={Paper}
            sx={{ bgcolor: "transparent", maxHeight: 300 }}
          >
            <Table stickyHeader sx={{borderCollapse:"collapse"}}>
              <TableBody>
                {leaderboardData.map((user: any, index: number) => {
                  const isYou = true;
                  // user.name.includes('(you)');
                  return (
                    <TableRow
                      key={user?.rank}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 1.5,
                        borderRadius: 1,
                        bgcolor: isYou ? "#F6F6F61C" : "#F6F6F61C",
                        color: isYou ? "#fff" : "#ccc",
                        border: "1px solid #fff",
                      }}
                    >
                      <TableCell sx={{ borderBottom:'none',color: "inherit", width: 40 }}>
                        <Typography variant="body1">{index + 1}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                           borderBottom:'none',
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Avatar sx={{ width: 30, height: 30, fontSize: 14 }}>
                          {user?.user?.charAt(0)}
                        </Avatar>
                        {user?.user}
                      </TableCell>
                      <TableCell sx={{ borderBottom:'none', color: "inherit", textAlign: "right" }}>
                        {user?.score} points
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <div className="buttonclass">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => {
                handleOpenLeaderboard();
              }}
              className="Button"
            >
              Play Again
            </Button>
          </div></>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              mt: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="loginbox"
          >
            <Typography variant="h5">Game Over</Typography>
            <Typography variant="body1">
              <span style={{ paddingLeft: "1rem", display: "inline-block" }}>
                You have scored
              </span>
            </Typography>
            <Button className="Button">
              <img src={star} height={40} /> {props.currScore}
            </Button>
          </Box>
          <div className="buttonclass">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => {
                handleOpenLeaderboard();
              }}
              className="Button"
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </>
    //   <Button
    // </div>
  );
};

export default GameOver;
