import React from "react";

interface ButtonProps {
  name: string;
  handleClick(): void;
}

const Buttons: React.FC<ButtonProps> = ({ name, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

export default Buttons;
