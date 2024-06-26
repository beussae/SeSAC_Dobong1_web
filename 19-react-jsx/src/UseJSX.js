import ClassComp from "./ClassComp";

export default function UseJSX() {
  //     //   인라인 스타일 적용
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gray",
  //     textAlign: "center",
  //     color: "white",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //     border: "1px solid red",
  //   };

  //   return (
  //     <div>
  //       <div style={{ color: "#fff", width: "100px", backgroundColor: "tomato" }}>
  //         first
  //       </div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //       <div style={divStyle}>fourth</div>
  //     </div>
  //   );

  // js 문법 사용해보기
  let isShow = false;

  function myFunc() {
    alert("안녕하세요요요요");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true 일때 보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>{isShow && "true 일때 보임"}</div>
      <div style={{ backgroundColor: "skyblue" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false이군요!" : "TURE이군요!"}
      </div>
      <div style={{ backgroundColor: "purple" }}>
        {!isShow && "falsw 일때 보임"}
      </div>
      <div onClick={() => addNum(8, 5)}>8더하기 5의 결과를 alert로 확인</div>
      <div onClick={() => myFunc()}>myFunc실행</div>
      <br />
      <ClassComp />
      <br></br>
      <hr />
      <div className="div"></div>
    </div>
  );
}
