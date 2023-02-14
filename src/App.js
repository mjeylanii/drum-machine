import "./App.css";
import DrumBox from "./DrumBox";
import Footer from "./Footer";

function App() {
  return (
    <div
      id="drum-machine"
      className="container-fluid flex justify-center flex-col content-center bg-neutral-700 App p-8 "
    >
      <div className="h-4 mx-auto">
        <h1 className="text-neutral-100 font-semibold text-3xl text-center border-b-4 border-lime-500 w-fit shadow-sm">
          Drum Machine
        </h1>
      </div>
      <DrumBox />
      <Footer />
    </div>
  );
}

export default App;
