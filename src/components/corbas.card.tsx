import type { Component } from "solid-js";
import CheckmarkIcon from "./icons/checkmar.icon";

export const CorbasCard: Component = () => {
  return (
    <div class="w-[21rem] rounded-lg bg-slate-200/30 p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-200 transition-colors hover:bg-slate-50/30">
      <div class="flex justify-between">
        <div class="font-medium text-slate-900">Newsletter</div>
        <CheckmarkIcon />
      </div>
      <div class="mt-1 text-slate-700">Last message sent an hour ago</div>
      <div class="mt-6 font-medium text-slate-900">621 users</div>
    </div>
  );
};
