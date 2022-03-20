import "./App.css";
import Input from "../NameInput";
import Buttons from "../Button";
import { useState } from "react";
import Game from "../Game";

const App: React.FC = () => {
  const [playermove, setPlayerMove] = useState<string>("");
  const [round, setRound] = useState<number>(0);

  const handleRock = (): void => {
    setRound(round+1)
    setPlayerMove("rock");

  };
  const handlePaper = (): void => {
    setRound(round + 1);
    setPlayerMove("paper");
  };
  const handleScissors = (): void => {
    setRound(round + 1);
    setPlayerMove("scissors");
  };

  return (
    <div className="App">
      <Input />
      <Buttons name="k1" handleClick={handleRock} />
      <Buttons name="k2" handleClick={handlePaper} />
      <Buttons name="k3" handleClick={handleScissors} />
      <Game playermove={playermove} round={round} />
    </div>
  );
};

export default App;
