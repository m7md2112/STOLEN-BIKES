import { createPortal } from "react-dom";
import { ErrorMessage, LoadingMessage } from "./styles/Alert.styled";

interface Props {
  message: string;
  type: "error" | "loading";
}
const Alert: React.FC<Props> = ({ message, type }) => {
  const renderAlert = () => {
    switch (type) {
      case "error":
        return <ErrorMessage>{message}</ErrorMessage>;
      case "loading":
        return <LoadingMessage>{message}</LoadingMessage>;
      default:
        return null;
    }
  };
  return createPortal(renderAlert(), document.body);
};

export default Alert;
