import React from "react";
import Button from "./buttons/layerButton";
export default function AnimatedLayer() {
  return (
    <div className="group-hover:h-full layer z-1 group flex justify-center">
      <Button>DOWNLOAD CATALOG</Button>
    </div>
  );
}
