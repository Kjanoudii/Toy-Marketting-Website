import React from "react";
import Button from "./buttons/layerButton";
export default function AnimatedLayer({text}) {
  ///make sure the parent element is relative and has class group
  return (
    <div className="group-hover:h-full layer z-1 group flex justify-center">
    <Button text={text}/>
    </div>
  );
}
