import styled from "styled-components";

export default function Progress({ page, maxPage }) {
  const ProgressContainer = styled.div`
    margin-top: 3rem;
  `;
  const Fill = styled.div`
    background-color: #777;
    width: 100%;
    height: 10px;
  `;
  const Gauge = styled.div`
    background-color: skyblue;
    height: 100%;
    width: ${(props) => props.percent}%;
    transition: 0.4s;
  `;
  return (
    <ProgressContainer>
      <div>
        {page}/{maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100}></Gauge>
      </Fill>
    </ProgressContainer>
  );
}
