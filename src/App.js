/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";

import VideoList from "./Component/VideoList";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-12-12 16:24:00",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-12-12 15:50:00",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-12-12 14:45:00",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-12-11 14:45:00",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);
  return <VideoList list={list} />;
}

export default App;
