import { useDisplayDotsContext } from "src/context/DisplayDotsContext";

/**
 * @todo function is being called repeatedly during animation (each step of the animation calls this function). Function should only be called on component mount.
 */
export const useDisplayDots = () => {
  const displayDotsVals = useDisplayDotsContext();
  console.log("displayDotsVals: ", displayDotsVals);

  const keys = Object.keys(displayDotsVals);

  keys.map((key) => {
    const val = displayDotsVals[key];
    console.log("key: ", key);
    console.log("val: ", val);

    if (val === undefined || val === null)
      throw new Error(
        "useDisplayDots must be used within a DisplayDotsProvider",
      );

    return;
  });

  return displayDotsVals;
};
