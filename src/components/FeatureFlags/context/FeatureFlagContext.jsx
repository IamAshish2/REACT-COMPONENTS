import { createContext, useEffect, useState } from "react";
import ResponseFromApi from "../data";

export const FeatureFlagContext = createContext();

function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [elements, setElements] = useState([]);

  const fetchElementsToLoad = async () => {
    try {
      setLoading(true);
      const res = await ResponseFromApi();
      setElements(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElementsToLoad();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, elements }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export default FeatureFlagGlobalState;
