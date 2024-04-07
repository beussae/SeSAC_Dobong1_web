import { useState } from "react";

export default function HandlerEx() {
  const [word, setWord] = useState("Hello World!");

  function changeWord(e, word) {
    console.log(e.target);
    setWord(word);
  }

  return (
    <div>
      <h1>{word}</h1>
      <button
        onClick={(e) => {
          changeWord(e, "Goodbye World!");
        }}
      >
        변환
      </button>
    </div>
  );
}
