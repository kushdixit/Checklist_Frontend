import React from "react";
import { ErrorWrapper } from "styles/pages/AccountForm";

export default function ErrorComponent({ message, primary, secondary }) {
  return (
    <ErrorWrapper primary={primary} secondary={secondary}>
      {message}
    </ErrorWrapper>
  );
}
