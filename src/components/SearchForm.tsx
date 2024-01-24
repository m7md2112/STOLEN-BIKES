import { useState } from "react";
import {
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
  const [location, setLocation] = useState("Munich");
  const [distance, setDistance] = useState(0);
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const searchCriteria: SearchCriteria = {
    location,
    distance,
    query,
    startDate,
    endDate,
    resultsPerPage,
  };

  return (
    <SearchFormContainer>
      <FormLabel>Location:</FormLabel>
      <TextInput
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <FormLabel>Distance:</FormLabel>
      <TextInput
        type="number"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
      />

      <FormLabel>Query (Partial Case Title):</FormLabel>
      <TextInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <FormLabel>Date Range:</FormLabel>
      <DateInput
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <DateInput
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <FormLabel>Results Per Page:</FormLabel>
      <NumberInput
        type="number"
        value={resultsPerPage}
        onChange={(e) => setResultsPerPage(Number(e.target.value))}
      />

      <SearchButton onClick={() => handleSearch(searchCriteria)}>
        Search
      </SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
