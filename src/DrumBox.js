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
      isPlaying: false, // add isPlaying state
    };

    //Get the current sound name from the child component
    this.getCurrentSound = this.getCurrentSound.bind(this);
    this.setPlayingState = this.setPlayingState.bind(this); // bind setPlayingState
  }

  //Get the current sound name from the child component
  getCurrentSound(soundName) {
    soundName = soundName.replace(/_/g, " ");
    this.setState({
      currentSound: soundName,
    });
  }

  setPlayingState(isPlaying) {
    // define setPlayingState function
    this.setState({ isPlaying });
  }

  render() {
    const { isPlaying } = this.state; // get isPlaying state
    const displayClass = `md:w-1/3 grid md:grid-cols-2 xs:grid-cols-1 my-auto mx-auto gap-5 xs:w-2/3 h-1/3 bg-stone-500 shadow-sm rounded-md p-7 text-white border-double border-lime-500 ${
      isPlaying ? "border-4" : "border-2"
    } select-none justify-center content-center`;

    return (
      <div id="display" className={displayClass}>
        <div className="sm:order-0">
          <PadsBox
            getCurrentSound={this.getCurrentSound}
            setPlayingState={this.setPlayingState}
          />
        </div>
        <div className="sm:order-1">
          <Controls currentSound={this.state.currentSound} />
        </div>
      </div>
    );
  }
}
