import "./App.css";
import Input from "../NameInput";
import Buttons from "../Button";
import { useState } from "react";

const App: React.FC = () => {
  const [rock, setRock] = useState<string>();
  const [paper, setPaper] = useState<string>();
  const [scissors, setScissors] = useState<string>();

  const handleRock = ():void => {
setRock("rock")

  };
  const handlePaper = ():void => {
    setPaper("paper")
  };
  const handleScissors = ():void => {
    setScissors("scissors")
  };

  console.log(rock);
  console.log(paper);
  console.log(scissors);
  return (
    <div className="App">
      <Input />
      <Buttons name="k1" handleClick={handleRock} />
      <Buttons name="k2" handleClick={handlePaper}/>
      <Buttons name="k3" handleClick={handleScissors} />
    </div>
  );
};

export default App;
