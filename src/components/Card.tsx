import type { Component } from "solid-js";

export const Card: Component = () => {
  return (
    <div class="w-[21rem] rounded-lg bg-slate-200/30 p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-200 transition-colors hover:bg-slate-50/30">
      <div class="flex justify-between">
        <div class="font-medium text-slate-900">Newsletter</div>
        <svg class="h-5 w-5 flex-none" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
            fill="#4F46E5"
          ></path>
        </svg>
      </div>
      <div class="mt-1 text-slate-700">Last message sent an hour ago</div>
      <div class="mt-6 font-medium text-slate-900">621 users</div>
    </div>
  );
};
