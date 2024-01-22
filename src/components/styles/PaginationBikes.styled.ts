import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PageButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const PageInput = styled.input`
  width: 50px;
  margin: 0 8px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

export { PageButton, PageInfo, PageInput, PaginationContainer };
