import { createContext, useState, useContext } from "react";

import useInterval from "src/hooks/useInterval";

export const DisplayDotsContext = createContext<any | null>(null);
export const useDisplayDotsContext = () => useContext(DisplayDotsContext);

const DisplayDotsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deactivatedCoords, setDeactivatedCoords] = useState<
    number[][] | any[]
  >([]);
  const [inactiveCoords, setInactiveCoords] = useState<number[][]>();
  const [animeEnded, setAnimeEnded] = useState<boolean>(false);

  function displayDotsAnimeCallback(): void {
    if (inactiveCoords?.length) {
      const inactiveCoord: number[] | undefined = inactiveCoords?.pop();

      deactivatedCoords.length
        ? setDeactivatedCoords((prev: number[][]) => [...prev, inactiveCoord])
        : setDeactivatedCoords([inactiveCoord]);

      return;
    }

    setAnimeEnded(true);
  }

  function startAnime(inactiveCoords: number[][]) {
    setInactiveCoords(inactiveCoords);
  }

  function restartAnime(inactiveCoords: number[][]) {
    setDeactivatedCoords([]);
    setInactiveCoords(inactiveCoords);
    setAnimeEnded(false);
  }

  useInterval(animeEnded, displayDotsAnimeCallback, 12.5);

  return (
    <DisplayDotsContext.Provider
      value={{
        deactivatedCoords,
        animeEnded,
        startAnime,
        restartAnime,
      }}
    >
      {children}
    </DisplayDotsContext.Provider>
  );
};

export default DisplayDotsProvider;
