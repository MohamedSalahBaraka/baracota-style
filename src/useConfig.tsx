import { useContext } from "react";

const useConfig = (token: string) => {
  return {
    timeout: 10000,
    headers: { Authorization: `Bearer ${token}` },
  };
};

export default useConfig;
