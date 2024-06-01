import { FC, useState } from "react";
import Button from "./Button";
import "./Joke.css";

const Joke: FC = () => {
  const [Joke, setJoke] = useState<string>("");

  const fetchApi = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(`${data.setup}\n ${data.punchline}`));
  };

  return (
    <div className="joke">
      <Button callApi={fetchApi} />
      <div className="JokeBox">
        <p>{Joke}</p>
      </div>
    </div>
  );
};

export default Joke;
