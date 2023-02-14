import React from "react";

export default function Controls({ currentSound }) {
  const soundName = currentSound.replace(/_/g, " ");
  return (
    <div className="bg-zinc-600 shadow-md font-semibold w-1/2 h-fit p-3 mx-auto my-auto">
      <p>{currentSound ? soundName : "Click or press a key to play a sound"}</p>
    </div>
  );
}
