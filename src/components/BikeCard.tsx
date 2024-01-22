import {
  CardContainer,
  CaseDescription,
  CaseTitle,
  ContentContainer,
  DateLocationContainer,
  DateOfTheft,
  DateReported,
  Image,
  ImageContainer,
  Location,
  Span,
} from "./styles/BikeCard.styled";

import noImage from "../assets/no-image.jpg";

interface Props {
  imageURL: string;
  title: string;
  description: string;
  dateOfTheft: number;
  dateReported: number;
  location: string;
}

const Card: React.FC<Props> = ({
  imageURL,
  title,
  description,
  dateOfTheft,
  dateReported,
  location,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageURL ? imageURL : noImage} alt="Case Image" />
      </ImageContainer>
      <ContentContainer>
        <CaseTitle>{title}</CaseTitle>
        <CaseDescription>{description}</CaseDescription>
        <DateLocationContainer>
          <DateOfTheft>
            <Span>Date of Theft: </Span>{" "}
            {new Date(dateOfTheft * 1000).toLocaleString()}
          </DateOfTheft>
          <DateReported>
            {" "}
            <Span>Date Reported: </Span> {dateReported}
          </DateReported>
          <Location>
            <Span>Location: </Span> {location}
          </Location>
        </DateLocationContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
