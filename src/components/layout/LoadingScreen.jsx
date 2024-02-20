/* eslint-disable no-unused-vars */
import React from "react";
import {
  BarLoader,
  DoubleBubble,
  Spinner,
  HalfMalf,
  DoubleOrbit,
} from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
export default function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center">
      <HalfMalf className="w-72 mx-auto" />
    </div>
  );
}
