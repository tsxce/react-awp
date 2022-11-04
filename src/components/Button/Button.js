import React, { useCallback, useState } from "react";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);
  return (
    <>
      {isClicked ? <h1>hello</h1> : ""}
      <button onClick={handleClick}>NPM library</button>
    </>
  );
};

export { Button };
