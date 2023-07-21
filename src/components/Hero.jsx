export default function Hero() {
  return (
    <section
      className={`w-full border-2 border-solid p-5 lg:mt-20 lg:w-auto lg:p-10`}
    >
      <h1
        className={`-mb-2 whitespace-pre-line border-tw-white text-4xl uppercase text-tw-white lg:pr-20 lg:text-[4.25rem] lg:leading-[1]`}
      >
        Immersive <br />
        experiences <br />
        that <br className={`lg:hidden`} />
        deliver
      </h1>
    </section>
  );
}
