export default function Header({ children }) {
  return (
    <header
      className={`bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-center px-6 lg:bg-tw-black lg:bg-opacity-40 lg:bg-[url('/images/desktop/image-hero.jpg')] lg:bg-blend-overlay`}
    >
      {children}
    </header>
  );
}
