import React from "react";

export default function Controls({ currentSound }) {
  return (
    <div className="bg-zinc-600 shadow-md font-semibold w-1/2 h-fit p-3 mx-auto mt-24">
      <p>
        {currentSound ? currentSound : "Click or press a key to play a sound"}
      </p>
    </div>
  );
}
