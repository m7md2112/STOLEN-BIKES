import { SetStateAction, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./BikeCard";
import PaginationBikes from "./PaginationBikes";

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
  const { data, error, loading, refetch } = useAxios<ApiResponse>({
    url: `search?page=${currentPage}&per_page=10&query=`,
    method: "GET",
    useBaseUrl: true,
  });

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    setTimeout(() => {
      refetch();
    }, 1000);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.bikes.map((bike) => {
          return (
            <Card
              key={bike.id}
              imageURL={bike.large_img}
              title={bike.title}
              description={bike.description}
              dateOfTheft={bike.date_stolen}
              dateReported={bike.year}
              location={bike.stolen_location}
            />
          );
        })}
      <PaginationBikes
        countPerPage={10}
        currentPage={currentPage}
        location="munich"
        onPageChange={(page) => handlePageChange(page)}
      />
    </>
  );
};
export default StolenBikes;
