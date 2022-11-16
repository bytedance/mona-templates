import React from "react";

import HelloComp from "./components/Hello";
import style from "./index.module.<%= data.cssExt %>";

function myComp() {
  return (
    <div className={style["max-text"]}>
      <div>It is Max Isv!!!</div>
      <HelloComp />
    </div>
  );
}

export default myComp;
