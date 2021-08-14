import styled from "styled-components";
import CourseCard from "./CourseCard.jsx";

const Container = styled.div`
  display: flex;
  align-items: center; // vertical alignment
  height: 100vh;
  justify-content: center; // horizontal alignment
`;

export default function App() {
  return (
    <Container>
      <CourseCard />
      <CourseCard isFree={false} />
    </Container>
  );
}
