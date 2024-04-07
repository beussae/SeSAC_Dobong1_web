import { useCallback, useState } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <input type="text" onChange={onChangeText} />
      <p>작성한값:{text}</p>
    </>
  );
}
