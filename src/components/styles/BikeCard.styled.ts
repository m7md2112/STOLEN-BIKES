import styled from "styled-components";

const CardContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-height: 200px;
  overflow: overlay;
  width: 90%;
  margin: 12px 0 0;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    flex-direction: column;
    max-height: fit-content;
    overflow: overlay;
  }
`;

const ImageContainer = styled.p`
  flex: auto;
  margin: auto;
  justify-content: center;
  display: inherit;
  height: 200px;
  position: relative;
  max-width:180px;
}
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  margin: auto;
  min-width: 80%;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  height: -webkit-fill-available;
  contain: content;
  text-overflow: ellipsis;
  overflow: auto;
  white-space: pre-wrap;
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

const DateOfTheft = styled.span`
  padding: 10px;
`;

const DateReported = styled.span`
  padding: 10px;
`;

const Location = styled.span`
  padding: 10px;
`;

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
