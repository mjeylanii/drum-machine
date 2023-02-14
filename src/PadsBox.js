import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function PadsBox({ getCurrentSound }) {
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

  const playSound = (audioRef, src) => {
    const soundName = src.split("/").pop().slice(0, -4);
    getCurrentSound(soundName);
    const audio = audioRef.current;
    if (audio.paused || src !== audio.src) {
      audio.src = src;
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div className="container grid grid-cols-3 gap-2.5 gap-x-2  text-white">
      {Object.keys(srcLink).map((key) => (
        <Button
          text={key}
          src={srcLink[key]}
          playSound={playSound}
          audioRef={audioRef}
          key={key}
          dataKey={key} // add a data-key attribute to the button element
        />
      ))}
    </div>
  );
}
