const isSuccess = "access_token";
export const isUser = () => {
  if (localStorage.getItem(isSuccess)) {
    return true;
  }

  return false;
};
