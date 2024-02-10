import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });
  const showAlert = ({ text, type = "danger" }) => {
    setAlert({
      show: true,
      text: text,
      type: type,
    });
  };
  const hideAlert = () => {
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  };
  return [alert, showAlert, hideAlert];
}
