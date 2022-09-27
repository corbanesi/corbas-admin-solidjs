import { VoidComponent } from "solid-js";
import { LoadingIcon } from "./icons";

const CorbasLoading: VoidComponent = () => {
  return (
    <div class="flex h-full items-center justify-center text-white">
      <LoadingIcon width={10} height={10} />
    </div>
  );
};

export default CorbasLoading;
