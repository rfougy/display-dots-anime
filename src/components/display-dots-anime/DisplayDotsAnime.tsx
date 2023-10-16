import { useEffect, useMemo, useState } from "react";
import { useDisplayDotsContext } from "../../context/DisplayDotsContext";

import DotWord from "./word/DotWord";

import IAllCoords from "src/interfaces/IAllCoords";

import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../lib/getCoords";
import shuffleArr from "../../utils/shuffleArr";

import { Box, DisplayDotsBox } from "./DisplayDotsAnime.styled";

// import IconButton from "../../shared/icon-button/IconButton";
// import restartIcon from "../../../public/assets/icons/restart-icon.svg";

const DisplayDotsAnime: React.FC<{
  text?: string;
  includeRestartButton?: boolean;
}> = ({ text = "DISPLAY DOTS!", includeRestartButton }) => {
  const [restartButtonRotating, setRestartButtonRotating] =
    useState<boolean>(false);

  const { restartAnime, startAnime, animeEnded } = useDisplayDotsContext();

  const upperCaseText: string = text.toUpperCase();

  const coordsByWordAndSpace: any = useMemo(
    () => Object.values(groupCoordsByWordAndSpace(upperCaseText)),
    [upperCaseText],
  );

  const coordsByChar: IAllCoords[] = useMemo(
    () => Object.values(groupCoordsByChar(upperCaseText)),
    [upperCaseText],
  );

  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    [],
  );

  function start() {
    startAnime(shuffleArr(allInactiveCoords));
  }

  function restart() {
    restartAnime(shuffleArr(allInactiveCoords));
  }

  useEffect((): void => start(), []);
  useEffect(() => setRestartButtonRotating(animeEnded), [animeEnded]);

  return (
    <Box>
      <DisplayDotsBox>
        {coordsByWordAndSpace.map((wordOrSpace: string, index: number) => (
          <DotWord key={index} wordOrSpace={wordOrSpace} />
        ))}
      </DisplayDotsBox>
      {/* {includeRestartButton && (
        <IconButton
          src={restartIcon}
          alt="restart icon"
          ariaLabel="restart animation"
          isDisabled={!animeEnded}
          rotate={restartButtonRotating.toString() as "true" | "false"}
          onClick={() => restart()}
        />
      )} */}
    </Box>
  );
};

export default DisplayDotsAnime;
