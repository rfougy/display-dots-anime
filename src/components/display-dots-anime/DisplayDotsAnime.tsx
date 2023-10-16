"use client";

import { useEffect, useMemo } from "react";
import { useDisplayDotsContext } from "../../context/DisplayDotsContext";

import DotWord from "./word/DotWord";

import IAllCoords from "src/interfaces/IAllCoords";

import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../lib/getCoords";
import shuffleArr from "../../utils/shuffleArr";

import { Box, DisplayDotsBox } from "./DisplayDotsAnime.styled";

export const DisplayDotsAnime: React.FC<{
  text: string;
}> = ({ text }) => {
  const { startAnime } = useDisplayDotsContext();

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

  useEffect((): void => start(), []);

  return (
    <Box>
      <DisplayDotsBox>
        {coordsByWordAndSpace.map((wordOrSpace: string, index: number) => (
          <DotWord key={index} wordOrSpace={wordOrSpace} />
        ))}
      </DisplayDotsBox>
    </Box>
  );
};
