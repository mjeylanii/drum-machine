import React, { useRef, useEffect, useState } from "react";

const Button = ({ text, src, playSound, audioRef, dataKey }) => {
  const buttonRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    playSound(audioRef, src);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (dataKey === key) {
        buttonRef.current.click(); // trigger the button click
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dataKey]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className={`bg-zinc-600 hover:bg-zinc-700 rounded-lg w-20 h-20 flex items-center justify-center select-none font-bold shadow-2xl active:bg-lime-500 ${
        clicked ? "bg-lime-500" : ""
      }`}
      data-key={dataKey} // add a data-key attribute to the button element
    >
      <audio ref={audioRef} src={src} />
      {text}
    </button>
  );
};

export default Button;
