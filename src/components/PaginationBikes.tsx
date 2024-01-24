import { forwardRef, useImperativeHandle } from "react";
import useAxios from "../hooks/useAxios";
import {
  PageButton,
  PageInfo,
  PageInput,
  PaginationContainer,
} from "./styles/PaginationBikes.styled";

export type FetchRef = { refetch: () => void };
interface Props {
  location: string;
  distance: number;
  searchQuery: string;
  countPerPage: number;
  currentPage: number;
  onPageChange: (arg0: number) => void;
}

interface ApiResponse {
  non: number;
  stolen: number;
  proximity: number;
}

const PaginationBikes = forwardRef<FetchRef, Props>(
  (
    {
      location,
      distance,
      searchQuery,
      countPerPage,
      currentPage,
      onPageChange,
    },
    ref
  ) => {
    const { data, error, refetch } = useAxios<ApiResponse>({
      url: `search/count?location=${location}&query=${searchQuery}&distance=${distance}&stolenness=proximity`,
      method: "GET",
      useBaseUrl: true,
    });

    useImperativeHandle(ref, () => {
      return {
        refetch,
      };
    });

    const totalPages = Math.ceil((data?.proximity || 0) / countPerPage);

    const handlePageChange = (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };

    const handleInputChange = (e: { target: { value: string } }) => {
      const newPage = parseInt(e.target.value, 10);
      if (!isNaN(newPage)) {
        handlePageChange(newPage);
      }
    };

    return (
      <>
        {error ? (
          <p>{error}</p>
        ) : (
          <PaginationContainer>
            <PageInfo>
              <span>Total Results: {data?.proximity || 0}</span>
              &nbsp;&nbsp;&nbsp;
              <span>Results per Page: {countPerPage}</span>
            </PageInfo>
            <div>
              <PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </PageButton>
              <PageInput
                type="number"
                value={currentPage}
                onChange={handleInputChange}
              />
              <span>/ {data?.proximity === 0 ? 1 : totalPages}</span>
              <PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </PageButton>
            </div>
          </PaginationContainer>
        )}
      </>
    );
  }
);
export default PaginationBikes;
