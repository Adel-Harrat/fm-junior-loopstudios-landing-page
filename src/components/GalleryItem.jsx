export default function GalleryItem({ item }) {
  return (
    <article
      className={`group relative -z-10 cursor-pointer select-none bg-tw-white hover:text-tw-black lg:z-0`}
    >
      <picture
        className={`brightness-75 transition duration-200 group-hover:opacity-40`}
      >
        <source
          media="(min-width: 1025px)"
          srcSet={`/images/desktop/${item.image}`}
        />
        <img
          src={`/images/mobile/${item.image}`}
          className={`h-full w-full object-cover`}
          alt={item.text}
        />
      </picture>

      <h3
        className={`absolute bottom-5 left-5 max-w-[8rem] text-[1.3rem] uppercase leading-6 text-tw-white transition duration-700 group-hover:text-tw-black lg:bottom-8 lg:left-8 lg:max-w-[12rem] lg:text-[2rem] lg:leading-8`}
      >
        {item.text}
      </h3>
    </article>
  );
}
