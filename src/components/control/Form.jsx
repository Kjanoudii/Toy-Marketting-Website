import React from "react";
import Input from "./Input";
import Button from "./buttons/Button";

export default function Form() {
  return (
    <form className="lg:pl-9 pl-0 px-7 lg:pr-3">
      <Input text="First Name" />
      <Input text="Last Name" />
      <Input text="Email Address" />
      <Input />
      <textarea className="c-thin-border w-80 lg:w-full h-36" />

      <Button>
        <p className="p-8">SUBMIT</p>
      </Button>
    </form>
  );
}
