import { useDisplayDotsContext } from "src/context/DisplayDotsContext";

export const useDisplayDots = () => {
  const displayDotsVals = useDisplayDotsContext();

  for (const key of Object.keys(displayDotsVals)) {
    const val = displayDotsVals[key];

    if (val === undefined || val === null)
      throw new Error(
        "useDisplayDots must be used within a DisplayDotsProvider",
      );

    return;
  }

  return displayDotsVals;
};
