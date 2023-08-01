import React from "react";
import FallingTextComponent from "./Anim_81";

const ParentComponent = () => {
  const fakeText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo. Nulla facilisi. Nullam euismod, nunc at bibendum tincidunt, velit velit lacinia justo, vel luctus justo nulla vel justo.";

  return <FallingTextComponent text={fakeText} />;
};

export default ParentComponent;
