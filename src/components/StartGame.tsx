import { Button } from "@mui/material";
import React, { useState } from "react";
// import auth from "../firebase/firebase";
import {db} from "../firebase/firebase";
import Navbar from "./Navbar";
import redhalfcircle from "../assets/redhalfcircle.png";
import greenhalfcircle from "../assets/greenhalfcircle.png";
import "../responsive.css";
import Fake from "../assets/F1.jpg";
import star from "../assets/Star.png";
import ImageCarousal from "./ImageCarousal";
import GameOver from "./GameOver";
import { push, ref, set } from "firebase/database";
import { enqueueSnackbar } from "notistack";
const StartGame = () => {
  const images = [
  {
    img: Fake,
    fake: true,
  },
  {
    img: Fake,
    fake: false,
  },
  {
    img: Fake,
    fake: true,
  },
  {
    img: Fake,
    fake: false,
  },
  {
    img: Fake,
    fake: true,
  },
  {
    img: Fake,
    fake: true,
  },
];
  const [currScore, setCurrScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [imagesArr, setImagesArr] = useState(images);
  const handleScore = (userinput: boolean, correctans: boolean,index:number) => {
    
    if (userinput && correctans) {
      setCurrScore((prev: number) => prev+1);
       enqueueSnackbar("correct ans!",{variant:'success'})
    }
    else{
       setCurrScore((prev: number) => prev-1);
       enqueueSnackbar("oops! wrong ans",{variant:'error'})
    }
    if(imagesArr.length===1){
      setGameOver(true);
      const newScoreRef = push(ref(db,"scores"))
      set(newScoreRef,{
        user:"manshi",
        score:currScore
      }).then(()=>{
        enqueueSnackbar("score added!",{variant:'success'})
      }).catch(()=>{
         enqueueSnackbar("something went wrong!",{variant:'error'})
      })
    }
    else{
    setImagesArr(prev => prev.filter((_, i) => i !== index));
    }
    
  };
  
  return (
    <div className="login">
      <Navbar />
      {gameOver?<GameOver currScore={currScore}/>:
       <>      
       <div style={{ position: "relative" }}>
        <img
          src={redhalfcircle}
          alt="game"
          className="responsive-img"
          style={{ display: "flex", margin: "auto" }}
          draggable={true}
        />
        <Button className="Button scoreButton">
          <img src={star} height={40} /> {currScore}
        </Button>
      </div>
      {/* <img
        src={Fake}
        alt="game"
        // className="responsive-img"
        // style={{ display: "flex", margin: "auto" }}
        draggable={true}
      /> */}
    { <ImageCarousal handleScore={handleScore} imagesArr={imagesArr}/>}

      <img
        src={greenhalfcircle}
        alt="game"
        className="responsive-img"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "0px",
          display: "flex",
          margin: "auto",
          zIndex: 0,
        }}
      />
 </>}
      {/* <Button onClick={() => auth.signOut()}>Logout</Button> */}
    </div>
   
  );
};

export default StartGame;
