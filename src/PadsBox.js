import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

export default function PadsBox() {
  const [activeButton, setActiveButton] = useState("");
  const audioRef = useRef(null);
  const srcLink = {
    Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  };

  const playSound = (audioRef) => {
    setActiveButton(audioRef.current.src);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  const handleKeyboard = (event, audioRef) => {
    playSound(audioRef);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  return (
    <div className="container grid grid-cols-3 gap-2.5 gap-x-0  text-white">
      {Object.keys(srcLink).map((key) => (
        <Button
          text={key}
          src={srcLink[key]}
          playSound={playSound}
          handleKeyboard={handleKeyboard}
          activeButton={activeButton}
          audioRef={audioRef}
          key={key}
        />
      ))}
    </div>
  );
}
