import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer({ items }) {
  return (
    <footer
      className={`mt-24 overflow-auto bg-tw-black pb-12 pt-8 lg:p-0 lg:py-10`}
    >
      <div
        className={`lg:mx-auto lg:flex lg:max-w-5xl lg:items-start lg:justify-between`}
      >
        <div className={`lg:flex lg:flex-col lg:items-start lg:gap-6`}>
          <picture className={`mb-2 block p-5 lg:p-0`}>
            <img src="/images/logo.svg" alt="logo" className={`mx-auto w-32`} />
          </picture>

          <section>
            <h2 className="sr-only">links of menu items</h2>

            <ul
              className={`flex flex-col items-center justify-center gap-3 lg:flex-row lg:items-start lg:gap-8`}
            >
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    className={`text-tw-white after:relative after:mx-auto after:mt-2 after:hidden after:h-0.5 after:w-1/2 after:bg-tw-white hover:after:block`}
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className={`lg:flex lg:flex-col lg:items-end lg:gap-6`}>
          <section>
            <h2 className="sr-only">links of social media</h2>

            <ul className="mt-12 flex items-center justify-center gap-4 lg:mt-0">
              <li>
                <a href="#" className={`text-2xl text-tw-white`}>
                  <FaSquareFacebook />
                </a>
              </li>

              <li>
                <a href="#" className={`text-2xl text-tw-white`}>
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a href="#" className={`text-2xl text-tw-white`}>
                  <FaPinterest />
                </a>
              </li>

              <li>
                <a href="#" className={`text-2xl text-tw-white`}>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="sr-only">Credits</h2>

            <p className={`mt-4 text-center text-sm text-tw-dark-gray lg:mt-0`}>
              &copy; {new Date().getFullYear()} Loopstudios. All rights
              reserved.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
