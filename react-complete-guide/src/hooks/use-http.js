import { useState, useCallback } from "react";

const API_URL = "http://localhost:1337/parse";
const HEADERS = {
  "X-Parse-Application-Id": "APPLICATION_ID",
  "Content-Type": "application/json",
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${requestConfig.path}`, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : HEADERS,
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
