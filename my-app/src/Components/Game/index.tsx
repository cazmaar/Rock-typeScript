import React, { useEffect, useRef, useState } from "react";

interface GameProps {
  playermove: string;
  round: number;
}
interface Result {
  win: string;
  draw: string;
  loose: string;
}

const Game: React.FC<GameProps> = ({ playermove, round }) => {
  const [computerMove, setComputerMove] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const mount = useRef<boolean>(false);

  const Gameresult: Result = {
    win: "win",
    loose: "loose",
    draw: "draw",
  };

  useEffect(() => {
    if (mount.current === false) {
      mount.current = true;
      return;
    } else {
      const playerOptions = ["rock", "paper", "scissors"];
      let num = Math.random() * 1;
      num >= 0 && num <= 0.33
        ? setComputerMove(playerOptions[0])
        : num > 0.33 && num <= 0.66
        ? setComputerMove(playerOptions[1])
        : setComputerMove(playerOptions[2]);
    }
    console.log(playermove)
    console.log(computerMove)

    if (playermove === computerMove) {
      setResult(Gameresult.draw);
    }
    console.log(result)

  }, [round]);

  console.log(round)

  return <div>Game</div>;
};

export default Game;
