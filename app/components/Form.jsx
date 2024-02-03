import React from 'react'
import Input from './Input';
import Button from "./Button";

export default function Form() {
  return (
    <form className="pl-9 pr-3">
      <Input text="First Name" />
      <Input text="Last Name" />
      <Input text="Email Address" />
      <Input />
      <textarea className="c-thin-border w-full h-36" />

      <Button>
        <p className="p-8">SUBMIT</p>
      </Button>
    </form>
  );
}
