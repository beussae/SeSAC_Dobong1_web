import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/lecture"}>실험코드</Link>
      <Link to={"/practice"}>실습</Link>
    </>
  );
}
