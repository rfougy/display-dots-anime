import { useDisplayDotsContext } from "src/context/DisplayDotsContext";

export const useDisplayDots = () => {
  const displayDotsVals = useDisplayDotsContext();

  const keys = Object.keys(displayDotsVals);

  keys.map((key) => {
    const val = displayDotsVals[key];

    if (val === undefined || val === null)
      throw new Error(
        "useDisplayDots must be used within a DisplayDotsProvider",
      );

    return;
  });

  return displayDotsVals;
};
