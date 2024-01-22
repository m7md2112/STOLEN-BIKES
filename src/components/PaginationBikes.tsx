import useAxios from "../hooks/useAxios";
import {
  PageButton,
  PageInfo,
  PageInput,
  PaginationContainer,
} from "./styles/PaginationBikes.styled";

interface Props {
  location: string;
  countPerPage: number;
  currentPage: number;
  onPageChange: (arg0: number) => void;
}

interface ApiResponse {
  non: number;
  stolen: number;
  proximity: number;
}

const PaginationBikes: React.FC<Props> = ({
  location,
  countPerPage,
  currentPage,
  onPageChange,
}) => {
  const { data, error } = useAxios<ApiResponse>({
    url: `search/count?location=${
      location || "munich"
    }&distance=10&stolenness=proximity`,
    method: "GET",
    useBaseUrl: true,
  });

  const totalPages = Math.ceil((data?.stolen || 0) / countPerPage);

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
            <span>Total Results: {data?.stolen || 0}</span>
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
              type="text"
              value={currentPage}
              onChange={handleInputChange}
            />
            <span>/ {totalPages}</span>
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
};
export default PaginationBikes;
