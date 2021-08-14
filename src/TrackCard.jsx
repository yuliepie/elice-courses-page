import ClassCount from "./icons/ClassCount.jsx";
import Progress from "./icons/Progress.jsx";
import LargeCalender from "./icons/LargeCalender.jsx";
import * as Card from "./Card";

TrackCard.defaultProps = {
  title: "비전공자를 위한 인공지능 기초 트랙",
  description:
    "프로그래밍 입문자를 위한 트랙입니다. 파이썬 문법과 구조를 익히고, 크롤링 프로그램을 활용하는 방법을 배웁니다.",
  trackDetails: {
    classCount: 4,
    trackLength: 10,
    duration: 10,
  },
  cost: {
    currentCost: 70000,
    originalCost: 210000,
    discountPercent: 10,
  },
  iconUrl: "aiml.png",
  installment: 3,
};

export default function TrackCard({
  title,
  description,
  trackDetails,
  cost,
  iconUrl,
  installment,
}) {
  return (
    <Card.Container large={true}>
      <Card.Corner />
      <Card.TrackCardIcon src={iconUrl} alt={iconUrl} />
      <Card.Title large>{title}</Card.Title>
      <Card.Description large>{description}</Card.Description>

      <Card.TextsWrapper>
        <Card.TextWrapper large>
          <ClassCount />
          <Card.Text large>과목 수 : {trackDetails.classCount} 과목</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper large>
          <Progress />
          <Card.Text large>과정 : {trackDetails.trackLength}주</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper large>
          <LargeCalender />
          <Card.Text large>
            과정 : 수강 신청일로부터 {trackDetails.duration}주
          </Card.Text>
        </Card.TextWrapper>
      </Card.TextsWrapper>

      <Card.DividerLine large />
      <Card.CostWrapper large>
        <Card.CurrentCost>
          {cost.currentCost.toLocaleString()}원
        </Card.CurrentCost>
        <Card.Installment>({installment}개월)</Card.Installment>
        <Card.OriginalCost>
          {cost.originalCost.toLocaleString()}원
        </Card.OriginalCost>
        <Card.DiscountPercent>{cost.discountPercent}%</Card.DiscountPercent>
      </Card.CostWrapper>
    </Card.Container>
  );
}
