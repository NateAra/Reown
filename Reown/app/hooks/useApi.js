import { useState } from "react";

export default useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunction();
    setLoading(false);

    if (!response.ok) {
      setError("Couldn't retrieve the listings.");
      return;
    }

    setError("");
    setData(response.data);
  };

  return { data, error, loading, request };
};
