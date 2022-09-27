import { Component, JSX } from "solid-js";

interface CorbasInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CorbasInput: Component<CorbasInputProps> = (props) => {
  return (
    <>
      <label for={props.id} class="sr-only">
        {props.label}
      </label>
      <input
        {...props}
        class="block w-full appearance-none rounded-lg border text-slate-500"
      />
    </>
  );
};

export default CorbasInput;
