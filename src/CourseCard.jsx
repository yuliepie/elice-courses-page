// CourseCard.jsx
import Chart from "./icons/chart.jsx";
import Computer from "./icons/computer.jsx";
import Calendar from "./icons/calendar.jsx";
import * as Card from "./Card";

CourseCard.defaultProps = {
  tags: ["태그1", "태그2"],
  title: "샘플 타이틀",
  description: "프로그래밍이 처음이신가요? 파이썬으로 쉽고 재밌게 시작해봐요.",
  isFree: true,
  cost: {
    currentCost: 42000,
    originalCost: 57000,
    discountPercent: 35,
  },
  courseDetails: {
    level: "중급",
    classFormat: "온라인",
    duration: "무제한",
  },
  languages: ["파이썬", "HTML/CSS", "자바스크립트"],
};

// styled component를 과목카드를 만드세요.
export default function CourseCard({
  tags,
  title,
  description,
  isFree,
  cost,
  courseDetails,
  languages,
}) {
  return (
    <Card.Container>
      <Card.Tags>{tags.join("﹒")}</Card.Tags>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>

      <Card.TextsWrapper>
        <Card.TextWrapper>
          <Chart />
          <Card.Text>난이도: {courseDetails.level}</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper>
          <Computer />
          <Card.Text>수업: {courseDetails.classFormat}</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper>
          <Calendar />
          <Card.Text>기간: {courseDetails.duration}</Card.Text>
        </Card.TextWrapper>
      </Card.TextsWrapper>
      <Card.Image src={"rabbit.png"} />

      <Card.LanguagesWrapper>
        {languages.map((lang, idx) => {
          return (
            <Card.Language key={`${lang}-${idx}-${title}`} language={lang}>
              {lang}
            </Card.Language>
          );
        })}
      </Card.LanguagesWrapper>

      <Card.DividerLine />
      {isFree ? (
        <Card.CostFree>무료</Card.CostFree>
      ) : (
        <Card.CostWrapper>
          <Card.CurrentCost>
            {cost.currentCost.toLocaleString()}원
          </Card.CurrentCost>
          <Card.OriginalCost>
            {cost.originalCost.toLocaleString()}원
          </Card.OriginalCost>
          <Card.DiscountPercent>{cost.discountPercent}%</Card.DiscountPercent>
        </Card.CostWrapper>
      )}
    </Card.Container>
  );
}
