import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState<string>();
  const [fullname, setFullName] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const val: string = event.target.value;
     setName(val);

  };

  const handleClick  = (event: React.MouseEvent<HTMLButtonElement>): void =>{
    event.preventDefault()
    setFullName(name)
  }

 

  return (
    <div>
      {fullname ? (
        <div>
          <p>Welcome {name}!</p>
        </div>
      ) : (
        <form>
          Welcome! Input your name. <input onChange={handleChange} />
          <button onClick={handleClick}>Enter</button>
        </form>
      )}
    </div>
  );
};

export default Input;
