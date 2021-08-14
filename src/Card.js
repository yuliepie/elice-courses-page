import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 296px;
  height: 407px;
  padding: 28px 24px 20px 24px;
  position: relative;

  background-color: white;
  border: 1px solid #f0f1f3;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.02);

  display: flex;
  flex-direction: column;

  /* Can override default CSS with props */
  ${(props) =>
    props.large &&
    css`
      width: 398px;
      height: 409px;
      padding-top: 32px;
    `}
`;

export const TrackCardIcon = styled.img`
  width: 28px;
  height: 28px;
  padding: 10px;
  background-color: #524fa0;
  border-radius: 18px;
  margin-bottom: 24px;
`;

export const Tags = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #5d59ad;
  margin-bottom: 8px;
`;

export const Title = styled.h5`
  font-weight: bold;
  font-size: ${(props) => (props.large ? 20 : 18)}px;
  line-height: ${(props) => (props.large ? 29 : 26)}px;
  color: #151618;

  margin-bottom: ${(props) => (props.large ? 15 : 16)}px;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: ${(props) => (props.large ? 22 : 20)}px;
  color: #5e5f61;
`;

export const DividerLine = styled.div`
  height: 1px;
  background-color: #ececec;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
`;

export const CostWrapper = styled.div`
  margin-top: ${(props) => (props.large ? 53 : 44)}px;
  display: flex;
  align-items: flex-end;
`;

export const CurrentCost = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #151618;
`;

export const OriginalCost = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #a8a9ab;

  margin-left: 8px;
`;

export const Installment = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-left: 4px;
`;

export const DiscountPercent = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #f94669;

  margin-left: auto;
`;

export const CostFree = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #34ab53;

  margin-top: ${(props) => (props.large ? 53 : 44)}px;
`;

export const TextsWrapper = styled.div`
  margin-top: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  + div {
    margin-top: ${(props) => (props.large ? 10 : 8)}px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${(props) => (props.large ? 14 : 12)}px;
  line-height: 22px;
  color: #7d7e80;
  margin-left: 8px;
`;

export const Image = styled.img`
  position: absolute;
  right: 24px;
  bottom: 158px;
  width: 56px;
  height: 56px;
`;

export const LanguagesWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

function getColorByLanguage(lang) {
  if (lang === "파이썬") return "#477DB1";
  else if (lang === "HTML/CSS") return "#DE561D";
  else if (lang === "자바스크립트") return "#F3CB39";
}

export const Language = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => getColorByLanguage(props.language)};

  position: relative;
  padding: 4px 6px;

  + p {
    margin-left: 8px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => getColorByLanguage(props.language)};
    opacity: 0.2;
    border-radius: 2px;
  }
`;

const OuterCorner = styled.div`
  //external corner
  width: 80px;
  height: 80px;
  box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.1);
  border-radius: 0px 8px 0px 32px;

  position: absolute;
  right: 0;
  top: 0;

  > div {
    //internal corner
    transition: all 200ms ease-in-out 0ms;

    width: 36px;
    height: 36px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #f4f4f4;
    box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.07);
    border-radius: 0px 8px 0px 32px;
  }

  :hover > div {
    background-color: #524fa0;
    width: 52px;
    height: 52px;
  }
`;

// Create Corner component for icon
export function Corner() {
  return (
    <OuterCorner>
      <div />
    </OuterCorner>
  );
}
