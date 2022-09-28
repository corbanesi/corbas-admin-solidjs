import { useAuthStateProvider } from "@/providers/auth.provider";
import { RoutesEnum } from "@/routes";
import { useLogout } from "@composables/auth/useLogout";
import { NavLink } from "@solidjs/router";
import {
  Component,
  createEffect,
  createSignal,
  For,
  onCleanup,
  Show,
} from "solid-js";

type NavItemType = {
  link: `/${string}`;
  label: string;
};

const navItems: NavItemType[] = [
  { link: RoutesEnum.HOME_PAGE, label: "Dashboard" },
  { link: RoutesEnum.ABOUT_PAGE, label: "About" },
];

const CorbasNavbar: Component = () => {
  const [open, setOpen] = createSignal(false);
  const authState = useAuthStateProvider();

  const { doLogout } = useLogout();

  createEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "Escape" && open()) {
      setOpen(false);
    }
    return;
  };

  const handleSignOut = () => {
    doLogout();
  };

  return (
    <nav>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <For each={navItems}>
                  {(navItem) => (
                    <NavLink
                      href={navItem.link}
                      class="nav-item rounded-md px-3 py-2 text-sm font-medium"
                      end
                    >
                      {navItem.label}
                    </NavLink>
                  )}
                </For>
              </div>
            </div>
          </div>
          <div>
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="rounded-full bg-slate-200/30 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div class="relative ml-3">
                <div>
                  <button
                    type="button"
                    class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setOpen(!open())}
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <Show when={open()}>
                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <div class="block border-b px-4 py-2 text-sm text-gray-700">
                      Hello, {authState.currentUser?.name}!
                    </div>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </a>
                  </div>
                </Show>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CorbasNavbar;
