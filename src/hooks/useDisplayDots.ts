import { useDisplayDotsContext } from "src/context/DisplayDotsContext";

export const useDisplayDots = () => {
  const displayDotsVals = useDisplayDotsContext();

  if (displayDotsVals === undefined)
    throw new Error("useCount must be used within a CountProvider");

  return displayDotsVals;
};
