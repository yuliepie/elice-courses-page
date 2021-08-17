import styled from "styled-components";
import CourseCard from "./CourseCard.jsx";
import TrackCard from "./TrackCard.jsx";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center; // vertical alignment
  height: 100vh;
  justify-content: center; // horizontal alignment
  width: 1232px;
  margin: auto; // same margin for left & right
`;

export default function App() {
  const [currTab, setCurrTab] = useState("트랙");
  const handleTabClick = (tab) => setCurrTab(tab);

  return (
    <>
      <Container>
        <Tab currTab={currTab} onClick={handleTabClick} />
      </Container>

      <Container>
        <TrackCard />
      </Container>

      <Container>
        <CourseCard />
        <CourseCard isFree={false} />
      </Container>
    </>
  );
}
