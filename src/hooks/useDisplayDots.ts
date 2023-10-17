import { useDisplayDotsContext } from "src/context/DisplayDotsContext";

export const useDisplayDots = () => {
  const displayDotsVals = useDisplayDotsContext();

  for (const val of displayDotsVals) {
    if (val === undefined || val === null)
      throw new Error(
        "useDisplayDots must be used within a DisplayDotsProvider",
      );

    return;
  }

  return displayDotsVals;
};
