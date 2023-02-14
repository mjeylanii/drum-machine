import React, { Component } from "react";
import Controls from "./Controls";
import PadsBox from "./PadsBox";

export default class DrumBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 0.5,
      currentSound: "",
      bank: "Heater Kit",
    };

    //Get the current sound name from the child component
    this.getCurrentSound = this.getCurrentSound.bind(this);
  }

  //Get the current sound name from the child component
  getCurrentSound(soundName) {
    this.setState({
      currentSound: soundName,
    });
  }
  render() {
    return (
      <div className="md:w-1/3  grid  md:grid-cols-2 xs:grid-cols-1 my-auto mx-auto gap-5 xs:w-2/3 h-1/3 bg-stone-500 shadow-xl rounded-md p-7 text-white border-double border-2 border-lime-500 select-none justify-center content-center ">
        <PadsBox getCurrentSound={this.getCurrentSound} />
        <Controls currentSound={this.state.currentSound} />
      </div>
    );
  }
}
