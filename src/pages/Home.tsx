import React from "react";
import DisplayDotsAnime from "src/components/display-dots-anime/DisplayDotsAnime";
import DisplayDotsProvider from "src/context/DisplayDotsContext";

const Home: React.FC = () => (
  <DisplayDotsProvider>
    <DisplayDotsAnime text="DISPLAY DOTS" />
  </DisplayDotsProvider>
);

export default Home;
