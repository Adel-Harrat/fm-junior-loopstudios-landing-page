import GalleryItem from "./GalleryItem";

export default function Gallery({ items }) {
  return (
    <section className={`lg:my-40`}>
      <div className={`lg:mb-20 lg:flex lg:items-center lg:justify-between`}>
        <h2
          className={`mb-12 text-center text-3xl uppercase text-tw-black lg:mb-0 lg:text-5xl`}
        >
          Our creations
        </h2>

        <a
          href="#"
          className={`hidden border border-solid border-tw-black px-8 py-2 font-tw-title text-sm font-bold uppercase tracking-widest text-tw-black transition duration-300 hover:bg-tw-black hover:text-tw-white lg:block`}
        >
          see all
        </a>
      </div>

      <section
        className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[26rem_26rem] lg:gap-8`}
      >
        {items.map((item) => (
          <GalleryItem item={item} key={item.id} />
        ))}
      </section>

      <div className="text-center lg:hidden">
        <a
          href="#"
          className={`mx-auto mt-8 inline-block border border-solid border-tw-black px-8 py-2 font-tw-title text-sm font-bold uppercase tracking-widest text-tw-black`}
        >
          see all
        </a>
      </div>
    </section>
  );
}
