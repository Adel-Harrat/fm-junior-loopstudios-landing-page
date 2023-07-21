import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Nav({ items }) {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <nav
      className={twMerge(
        `absolute inset-x-6 top-0 flex items-center justify-between py-10 lg:relative lg:inset-x-auto lg:top-20 lg:w-full lg:py-0`,
        menuShown && "fixed"
      )}
    >
      <a href="/" className={`z-50`}>
        <picture>
          <img src="/images/logo.svg" alt="logo" className={`w-32 lg:w-52`} />
        </picture>
        <span className="sr-only">link of the website</span>
      </a>

      <button
        className={`z-50`}
        onClick={() => setMenuShown((current) => !current)}
      >
        <picture>
          {menuShown ? (
            <img
              src="/images/icon-close.svg"
              className={`lg:hidden`}
              alt="close menu icon"
            />
          ) : (
            <img
              src="/images/icon-hamburger.svg"
              className={`lg:hidden`}
              alt="open menu icon"
            />
          )}
        </picture>

        <span className="sr-only">a button to show the menu</span>
      </button>

      {/* Mobile Menu */}
      <aside
        className={twMerge(
          `fixed inset-0 z-40 -translate-y-20 bg-tw-black`,
          menuShown ? "lg:hidden" : "hidden"
        )}
      >
        <div className="flex min-h-screen items-center justify-start px-6">
          <ul className="flex flex-col gap-5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={`font-tw-title text-3xl uppercase tracking-wider text-tw-white`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Desktop menu */}
      <aside className={`hidden lg:block`}>
        <ul className={`flex items-center gap-5`}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`group relative block text-center text-tw-white`}
              >
                {item.text}

                <span
                  className={`absolute inset-x-3 bottom-0 top-10 hidden h-0.5 w-1/2 -translate-y-2 bg-tw-white group-hover:inline-block`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
