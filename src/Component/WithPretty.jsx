import React from "react";
import formateDate from "../formateDate";

function withPretty(Component) {
  return function (props) {
    const newDate = formateDate(props?.date);
    return <Component date={newDate} />;
  };
}

export default withPretty;
