import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { ImStop } from "react-icons/im";
import image from "../image/image.png";
import nature from "../video/nature.mp4";
import Navbar from "./Navbar";
import More from "./More";
import "./Home.css";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const user = [
    "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.CVM58TfGuCQA20muJEJYvAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://img.freepik.com/premium-photo/cartoon-character-with-cowboy-hat-cowboy-hat_795871-12544.jpg",
  ];
  const handlePlayClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleStopClick = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <home className="Home">
      <img
        className="Home_img"
        src="https://static.vecteezy.com/system/resources/previews/036/725/233/non_2x/ai-generated-real-estate-advertisment-background-with-copy-space-free-photo.jpg"
        alt=""
      />
      <div className="navbar">
        <Navbar />
      </div>
      <div className="perfact_Home">
        <div className="perfact_Home_left">
          <p>
            The perfact Home <span>®</span>
          </p>
          <h2>/ We Craft Custom Home /</h2>
          <button className="btn">Start</button>
        </div>
        <div className="perfact_Home_right">
          <div>
            <ul>
              <li>interior</li>
              <li>Designer</li>
              <li>3D</li>
            </ul>
          </div>
          <div className="perfact_Home_right-heading">
            <div>
              <h1>Unique design & Erogonomics</h1>
              <h5>From Blueprints to Renders.</h5>
            </div>

            <div
              className="Roomtour"
              style={{
                position: "relative",
                width: "350px",
                height: "140px",
              }}
            >
              {!isPlaying ? (
                <FaPlayCircle
                  size={50}
                  color="rgb(150, 119, 100)"
                  onClick={handlePlayClick}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                />
              ) : (
                <ImStop
                  size={50}
                  color="rgb(200, 50, 50)"
                  onClick={handleStopClick}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                />
              )}
              <video
                ref={videoRef}
                className="Roomtour-vidio"
                src={nature}
                width="200"
                height="140"
                muted
                style={{
                  backgroundColor: "#000",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <img className="img" src={image} alt="" />
        </div>
      </div>
      <div className="Meterials">
        <div className="Meterials_l">
          <div>
            
            <p>We use Best matireals!</p>
            <h2>Working with verified Suppliers.</h2>
          </div>

          <div>
        
            <img
              className="matireal-img"
              src="https://previews.123rf.com/images/kumdinpitak/kumdinpitak1604/kumdinpitak160400008/57868218-building-materials.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="Meterials_m">
          {user.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`user-${index}`}
              className="user-img"
            />
          ))}
       <div>   <h1>12 m +</h1>
          <h5>Customers</h5></div>
        </div>
        <div className="Meterials_r">
          <p>WE can Combine Nature & Home Comfort</p>
            <li><Link to="/More">lern More</Link></li>
        </div>
      </div>
    </home>
  );
};

export default Home;
