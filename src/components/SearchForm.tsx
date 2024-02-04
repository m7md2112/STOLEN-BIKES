import { FormEvent } from "react";
import {
  DateGroup,
  DateInput,
  FormLabel,
  NumberInput,
  SearchButton,
  SearchFormContainer,
  TextInput,
} from "./styles/SearchForm.styled";

export interface SearchCriteria {
  location: string;
  distance: number;
  query: string;
  startDate: string;
  endDate: string;
  resultsPerPage: number;
}

interface Props {
  handleSearch: (arg0: SearchCriteria) => void;
}

const SearchForm: React.FC<Props> = ({ handleSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const searchFormData: SearchCriteria = {
      location: formData.get("location")?.toString() || "Munich",
      distance: Number(formData.get("distance")) || 1,
      query: formData.get("query")?.toString() || "",
      startDate: formData.get("startDate")?.toString() || "",
      endDate: formData.get("endDate")?.toString() || "",
      resultsPerPage: Number(formData.get("resultsPerPage")) || 10,
    };
    handleSearch(searchFormData);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <FormLabel>Location:</FormLabel>
      <TextInput type="text" name="location" defaultValue="Munich" />

      <FormLabel>Distance:</FormLabel>
      <NumberInput type="number" name="distance" defaultValue={1} />

      <FormLabel>Query (Partial Case Title):</FormLabel>
      <TextInput type="text" name="query" defaultValue="" />

      <FormLabel>Date Range:</FormLabel>
      <DateGroup>
        <DateInput type="date" name="startDate" defaultValue="" />
        <DateInput type="date" name="endDate" defaultValue="" />
      </DateGroup>

      <FormLabel>Results Per Page:</FormLabel>
      <NumberInput type="number" name="resultsPerPage" defaultValue={10} />

      <SearchButton type="submit">Search</SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
