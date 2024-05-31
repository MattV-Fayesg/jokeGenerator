import { FC, MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
  callApi: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  return <button onClick={props.callApi}>Click and get a Joke.</button>;
};

export default Button;
