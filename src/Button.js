import React, { useRef, useEffect, useState } from "react";

const Button = ({ text, src, playSound, dataKey }) => {
  const buttonRef = useRef(null);
  const audioRef = useRef(null);
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
        console.log("key pressed: ", key);
        console.log("buttonRef: ", buttonRef.current);
        console.log("audioRef: ", audioRef.current);
        buttonRef.current.click(); // trigger the button click
        audioRef.current.play(); // focus on the audio element
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dataKey]);

  return (
    <button
      id={dataKey}
      ref={buttonRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className={`drum-pad bg-zinc-600 hover:bg-zinc-700 rounded-lg w-20 h-20 flex items-center justify-center select-none font-bold  active:bg-lime-500 shadow-xl  ${
        clicked ? "bg-lime-500 shadow-inner" : ""
      }`}
      data-key={dataKey} // add a data-key attribute to the button element
    >
      <audio className="clip" ref={audioRef} src={src} id={dataKey} />
      {text}
    </button>
  );
};

export default Button;
