import styled from "styled-components";

const SearchFormContainer = styled.div`
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
  width: 25%;
  padding: 8px;
  margin: 5px 5px;
`;

const DateInput = styled.input`
  width: 30%;
  padding: 8px;
  margin: 5px 5px;
`;

const SearchButton = styled.button`
  width: 40%;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 5px 30%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export {
  DateInput,
  FormLabel,
  NumberInput,
  SearchButton,
  SearchFormContainer,
  TextInput,
};
