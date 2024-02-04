import styled from "styled-components";

const SearchFormContainer = styled.form`
  max-width: 85%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  width: 20%;
`;

const TextInput = styled.input`
  width: 70%;
  padding: 8px;
  margin: 5px 5px;
`;

const NumberInput = styled.input`
  min-width: 70%;
  padding: 8px;
  margin: 5px 5px;
`;

const DateInput = styled.input`
  min-width: 33%;
  padding: 8px;
  margin: 5px 5px;
`;
const DateGroup = styled.div`
  display: inline-flex;
  min-width: 75%;
  flex-direction: column;
`;

const SearchButton = styled.button`
  min-width: 40%;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 5px 30%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export {
  DateGroup,
  DateInput,
  FormLabel,
  NumberInput,
  SearchButton,
  SearchFormContainer,
  TextInput,
};
