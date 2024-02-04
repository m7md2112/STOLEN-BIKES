import { useRef } from "react";
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
  const locationRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const resultsPerPageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: SearchCriteria = {
      location: locationRef.current?.value || "Munich",
      distance: Number(distanceRef.current?.value) || 1,
      query: queryRef.current?.value || "",
      startDate: startDateRef.current?.value || "",
      endDate: endDateRef.current?.value || "",
      resultsPerPage: Number(resultsPerPageRef.current?.value) || 10,
    };

    handleSearch(formData);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <FormLabel>Location:</FormLabel>
      <TextInput type="text" ref={locationRef} defaultValue="Munich" />

      <FormLabel>Distance:</FormLabel>
      <NumberInput type="number" ref={distanceRef} defaultValue={1} />

      <FormLabel>Query (Partial Case Title):</FormLabel>
      <TextInput type="text" ref={queryRef} defaultValue="" />

      <FormLabel>Date Range:</FormLabel>
      <DateGroup>
        <DateInput type="date" ref={startDateRef} defaultValue="" />
        <DateInput type="date" ref={endDateRef} defaultValue="" />
      </DateGroup>

      <FormLabel>Results Per Page:</FormLabel>
      <NumberInput type="number" ref={resultsPerPageRef} defaultValue={10} />

      <SearchButton type="submit">Search</SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
