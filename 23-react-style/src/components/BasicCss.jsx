import "../style/BasicCSS.css";

function BasicCSS() {
  const childDiv = {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    textAlign: "center",
    linehegiht: "100px",
  };
  return (
    <>
      <h3>스타일 적용방법</h3>
      <ol>
        <li>인라인 스타일 적용</li>
        <li>.css 파일 만들어서 import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>style-components</li>
        <li>SASS</li>
      </ol>
      <h4 style={{ color: "#aaa" }}>인라인 스타일 적용</h4>
      <div style={{ backgroundColor: "#ddd" }}>
        <div style={childDiv}>안녕</div>
      </div>
      <h4>css 파일 만들어서 적용</h4>
      <div>
        <div> 안녕</div>
      </div>
    </>
  );
}

export default BasicCSS;
