import React, { useRef, useState, useEffect } from "react";


const Button = ({ text, src, playSound, handleKeyboard, activeButton }) => {
  const audioRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    playSound(audioRef);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const handleKeyDown = (event) => {
    console.log(event);
    handleKeyboard(event, audioRef);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  return (
    <button
      isClicked={isClicked}
      onClick={handleClick}
      onKeyDown={handleKeyDown} 
      role="button"
      tabIndex={0}
      className={`bg-zinc-600 hover:bg-zinc-700 rounded-lg w-20 h-20 flex items-center justify-center select-none font-bold  shadow-2xl active:bg-lime-500
      }`}
    >
      <audio ref={audioRef} src={src} />
      {text}
    </button>
  );
};

export default Button;
