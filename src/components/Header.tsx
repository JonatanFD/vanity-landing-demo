import { useEffect, useState } from "react";

const LINKS = [
  { name: "PRODUCTS", href: "/" },
  { name: "WORK", href: "/" },
  { name: "PRICING", href: "/" },
];


export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            setOpen(false);
        };
    }, []);

    return (
        <header className="w-full mx-auto py-3 px-4 z-30 bg-[#4254E3] text-white h-fit">
            <section className="flex justify-between xl:justify-start items-center mx-auto max-w-7xl gap-8">
                <a className="flex items-center" href="/">
                    <img src="/logo.svg" alt="Vanity" className="w-[32px] xl:w-[73px]" />
                </a>

                <nav
                    className={`flex gap-3 ${open ? "bg-black fixed w-screen h-screen top-0 left-0 flex-col items-start py-24 px-10" : ""} lg:bg-none `}
                >
                    {LINKS.map(({name, href}, index) => (
                        <a
                            key={index}
                            href={href}
                            rel="noopener noreferrer"
                            className={`text-3xl hover:text-blue-500 transition-colors flex items-centers lg:inline ${open ? "text-xl" : "hidden"}`}
                        >
                            {name}
                            <img src="/arrow-down.svg" alt="expand" className="inline ml-2" />
                        </a>
                    ))}
                </nav>

                <img
                    src={
                        open ? "/close-icon.svg" : "/menu-icon.svg"
                    }
                    alt={
                      open ? "close" : "menu"
                  }
                    className="z-30 inline lg:hidden aspect-square"
                    onClick={() => setOpen(!open)}
                />
            </section>
        </header>
    );
}
