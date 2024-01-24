import styled from "styled-components";

const PaginationContainer = styled.div`
  padding: 10px;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  background-color: rgb(22 20 20 / 90%);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  @media (prefers-color-scheme: light) {
    color: aqua;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PageInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
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
