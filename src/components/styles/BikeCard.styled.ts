import styled from "styled-components";

const CardContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 90%;
  margin: 12px 0 0;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.p`
  flex: 0 0 30%;
  margin: 0 auto;
  justify-content: center;
  display: inherit;
  height: 200px;
  position: relative;
  max-width:180px;
}
`;

const Image = styled.img`
  // max-width: 100%;
  // max-height: 180px;
  // object-fit: contain;

  display: block;
  margin: auto;
  max-height: 180px;
  min-width: 70px;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const CaseTitle = styled.h2`
  margin-bottom: 10px;
`;

const CaseDescription = styled.p`
  margin-bottom: 10px;
`;

const DateLocationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
    height: auto;
  }
`;

const Span = styled.span`
  font-style: italic;
  font-weight: bold;
`;

const DateOfTheft = styled.span``;

const DateReported = styled.span``;

const Location = styled.span``;

export {
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
};
