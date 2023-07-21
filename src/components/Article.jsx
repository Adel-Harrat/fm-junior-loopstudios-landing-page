export default function Article() {
  return (
    <article className={`my-24 lg:relative lg:my-40`}>
      <picture>
        <img
          src="/images/mobile/image-interactive.jpg"
          alt="image of interactive vr"
        />
      </picture>

      <section
        className={`lg:absolute lg:bottom-0 lg:right-0 lg:w-6/12 lg:bg-tw-white lg:pl-20 lg:pt-12`}
      >
        <h2
          className={`mb-6 mt-8 text-center text-3xl uppercase leading-7 text-tw-black lg:text-left lg:text-5xl`}
        >
          The leader in interactive VR
        </h2>
        <p
          className={`px-6 text-center leading-6 text-tw-gray lg:px-0 lg:text-left`}
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
    </article>
  );
}
