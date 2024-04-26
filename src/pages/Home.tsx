import { Link } from "react-router-dom";
import headerVideo from "../assets/anime04.mp4";
import logo from "../assets/logo.png";

export default function Home() {
  const navItems = [
    {
      label: "Discord",
      href: "#",
      target: "_blank",
    },
    {
      label: "NFTs",
      href: "#nfts",
      target: "",
    },
    {
      label: "About",
      href: "#about",
      target: "",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative w-full">
        <header className="w-full bg-black/50 backdrop-blur-3xl z-50 fixed h-[80px] flex items-center justify-center border-b border-white/50">
          <div className="max-w-[1366px] w-full px-8 flex items-center justify-between">
            <img width={56} height={56} src={logo} alt="Sanji logo" />
            <nav>
              <ul className="flex items-center gap-x-24">
                {navItems.map(({ href, label, target }) => {
                  return (
                    <li key={label}>
                      <Link
                        target={target}
                        to={href}
                        className="text-lg hover:text-gray-300 transition-colors duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button className="px-10 bg-yellow600 h-[52px] rounded-[10px] font-medium hover:bg-yellow700 transition duration-300">
              Get Access
            </button>
          </div>
        </header>
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={headerVideo} type="video/mp4" />
        </video>

        <div className="bg-black/60 w-full h-full left-0 bottom-0 absolute top-0 right-0" />
        <div className="bg-yellow600 opacity-50 blur-[200px] w-[500px] h-[500px] absolute top-0 right-0" />
        <div className="bg-yellow600 opacity-50 blur-[200px] w-[500px] h-[500px] absolute bottom-0 -left-[250px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-[3.5rem] font-black text-center leading-none">
              Lorem ipsum dolor Lorem ipsum
            </h1>
            <p className="text-xl max-w-[660px] text-center">
              Lorem ipsum dolor lorem ipsum dolo lorem ipsum dolor lorem ipsum
              dolor lorem.
            </p>
          </div>
          <button className="px-10 bg-yellow600 h-[52px] rounded-[10px] font-medium hover:bg-yellow700 transition duration-300">
            Get Access
          </button>
        </div>
      </div>

      <div className="w-full bg-white/20 h-px mt-32" />

      <section id="nfts">
        <div className="mt-32">
          <h1 className="text-[3.5rem] font-black text-center leading-none">
            Mint your access pass
          </h1>
        </div>
      </section>
    </div>
  );
}
