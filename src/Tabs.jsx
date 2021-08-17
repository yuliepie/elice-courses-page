import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e2e4;
  width: 100%;
`;

const EachTab = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #151618;
  padding: 8px;

  + p {
    margin-left: 16px;
  }

  /* override CSS with props */
  ${(props) =>
    props.active &&
    css`
      color: #524fa1;
      font-weight: bold;
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #524fa1;
    `}
`;

Tab.defaultProps = {
  currTab: "트랙",
  onClick: () => {},
};

const tabs = ["트랙", "과목"];

export default function Tab({ currTab, onClick }) {
  return (
    <Container>
      {tabs.map((tab, idx) => (
        <EachTab
          key={`${tab}-${idx}`}
          active={tab === currTab}
          onClick={onClick(tab)}
        >
          {tab}
        </EachTab>
      ))}
    </Container>
  );
}
