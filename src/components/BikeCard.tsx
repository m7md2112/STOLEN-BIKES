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
  dateOfTheft: string;
  dateReported: number;
  location: string;
}

const BikeCard: React.FC<Props> = ({
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
        <Image
          src={imageURL ? imageURL : noImage}
          alt="Case Image"
          width="150px"
          height="150px"
        />
      </ImageContainer>
      <ContentContainer>
        <CaseTitle>{title}</CaseTitle>
        <CaseDescription>{description}</CaseDescription>
        <DateLocationContainer>
          <DateOfTheft>
            <Span>Date of Theft: </Span> {dateOfTheft}
          </DateOfTheft>
          <DateReported>
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

export default BikeCard;
