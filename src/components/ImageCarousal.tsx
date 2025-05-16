import React, { Component } from "react";
import Slider from "react-slick";
import Fake from "../assets/F1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Draggable from "react-draggable";

 // Replace with your actual paths

const ImageCarousel = (props:any) => {
  const sliderRef = React.useRef<any>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // adjust based on screen
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    // infinite: props.imagesArr.length > 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "750px",
        mx: "auto",
        my: "-105px",
        zIndex: 5,
      }}
    >
      {/* <> */}
      {/* <IconButton
        sx={{ position: 'absolute', top: '40%', left: 0, zIndex: 2 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ArrowBackIos />
      </IconButton> */}

      <Slider ref={sliderRef} {...settings}>
        {props.imagesArr.map((img:any, index:number) => (
          <Box key={index} sx={{ px: 1 }}>
            <Box
              component="img"
              src={img.img}
              alt={`carousel-img-${index}`}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
              draggable={true}
            />
            <div className="buttongroup" style={{display:'flex', justifyContent:'space-around'}}>
            <IconButton onClick={()=>props.handleScore(false,img.fake,index)} className="wrongans">
              <CancelTwoToneIcon />
            </IconButton>
            <IconButton onClick={()=>props.handleScore(true,img.fake,index)} className="correctans">
              <CheckCircleTwoToneIcon />
            </IconButton>
            </div>
          </Box>
        ))}
      </Slider>

      {/* <IconButton
        sx={{ position: 'absolute', top: '40%', right: 0, zIndex: 2 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <ArrowForwardIos />
      </IconButton> */}
    </Box>
  );
};

export default ImageCarousel;
