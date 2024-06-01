import { FC, MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
  callApi: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.callApi}>
        <text>Click and get a </text>
        <text className="textBold">JOKE</text>
      </button>
    </div>
  );
};

export default Button;
