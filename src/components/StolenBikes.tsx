import { SetStateAction, useRef, useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "./Alert";
import BikeCard from "./BikeCard";
import PaginationBikes, { FetchRef } from "./PaginationBikes";
import SearchForm, { SearchCriteria } from "./SearchForm";
import { AppContainer, CardsContainer } from "./styles/AppContainer.styled";

interface BikesData {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: string;
  manufacturer_name: string;
  external_id: string;
  registry_name: string;
  registry_url: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: string;
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
}

interface ApiResponse {
  bikes: BikesData[];
}
const StolenBikes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>();

  const { data, error, loading, refetch } = useAxios<ApiResponse>({
    url: `search?page=${currentPage}&per_page=${
      searchCriteria?.resultsPerPage || 10
    }&query=${searchCriteria?.query || ""}&location=${
      searchCriteria?.location || "Munich"
    }&distance=${searchCriteria?.distance}&stolenness=proximity`,
    method: "GET",
    useBaseUrl: true,
  });

  const childRef = useRef<FetchRef>(null);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    setTimeout(() => {
      refetch();
    }, 1000);
  };

  const handleSearchCriteria = (data: SearchCriteria) => {
    setSearchCriteria(data);
    refetch();
    childRef.current?.refetch();
  };

  return (
    <AppContainer>
      <SearchForm handleSearch={handleSearchCriteria} />
      <CardsContainer>
        {data &&
          data.bikes.map((bike) => {
            return (
              <BikeCard
                key={bike.id}
                imageURL={bike.large_img}
                title={bike.title}
                description={bike.description}
                dateOfTheft={new Date(bike.date_stolen * 1000).toLocaleString()}
                dateReported={bike.year}
                location={bike.stolen_location}
              />
            );
          })}
      </CardsContainer>

      {loading && <Alert type="loading" message="Loading" />}
      {error && (
        <Alert type="error" message={`Something went wrong!: ${error}`} />
      )}

      <PaginationBikes
        ref={childRef}
        countPerPage={searchCriteria?.resultsPerPage || 10}
        currentPage={currentPage}
        location={searchCriteria?.location || "Munich"}
        distance={searchCriteria?.distance || 0}
        searchQuery={searchCriteria?.query || ""}
        onPageChange={(page) => handlePageChange(page)}
      />
    </AppContainer>
  );
};
export default StolenBikes;
