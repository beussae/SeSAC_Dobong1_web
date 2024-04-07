import { useState } from "react";

export default function InputInfo() {
  const [info, setInfo] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const addInfo = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) return;
    const newInfo = info.concat({
      name: inputName,
      email: inputEmail,
    });
    setInfo(newInfo);
    setInputName("");
    setInputEmail("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
        placeholder="이름"
      />
      <input
        type="text"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputName}
        placeholder="이메일"
      />
      <button onClick={addInfo}>등록</button>
      <ol>
        {info.map((InputInfo) => (
          <li>
            {InputInfo.name}
            {InputInfo.email}
          </li>
        ))}
      </ol>
    </div>
  );
}
