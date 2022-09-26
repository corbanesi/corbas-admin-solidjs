import { Component, JSX, ParentProps, Show } from "solid-js";

type CorbasButtonType = ParentProps & {
  icon?: JSX.Element;
  isLoading?: boolean;
  disabled?: boolean;
  full?: boolean;
};

export const CorbasButton: Component<CorbasButtonType> = (props) => {
  return (
    <button
      disabled={props.disabled}
      type="submit"
      classList={{ "w-full": props.full }}
      class="relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <Show when={props.icon}>
        <span
          classList={{ "absolute pl-3 inset-y-0 left-0": props.full }}
          class="mr-3 flex items-center"
        >
          {props.icon}
        </span>
      </Show>
      <span>{props.children}</span>
    </button>
  );
};
