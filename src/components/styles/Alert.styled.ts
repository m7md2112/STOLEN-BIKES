import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const AlertContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  animation: ${slideIn} 0.3s ease-in-out;
`;

const ErrorMessage = styled(AlertContainer)`
  background-color: #ff6961; /* Red */
  color: white;
`;

const LoadingMessage = styled(AlertContainer)`
  background-color: #00cc00; /* Green */
  color: white;

  &:after {
    content: "...";
    animation: ${bounce} 1.5s infinite;
    display: inline-block;
    vertical-align: middle;
  }
`;

export { ErrorMessage, LoadingMessage };
