import React, { Component } from "react";
import { useState } from "react";
import Controls from "./Controls";
import PadsBox from "./PadsBox";

export default class DrumBox extends Component {
  state = {
    enabled: false,
  };

  setEnabled = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  render() {
    return (
      <div className="container w-1/3 grid grid-cols-2 my-auto mx-auto bg-stone-500 shadow-xl rounded-md p-7 text-white border-double border-2 border-lime-500 select-none">
        <PadsBox />
        <Controls />
      </div>
    );
  }
}
