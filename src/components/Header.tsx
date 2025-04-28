import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Button from "./ui/Button";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Plans", href: "/plans" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Privacy Policy", href: "/privacy" },
];

const MORE_ITEMS: NavItem[] = [
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex h-24 items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <ul className="hidden [@media(min-width:920px)]:flex  space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li ref={moreRef} className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                aria-haspopup="true"
                aria-expanded={isMoreOpen}
                className="flex items-center hover:text-gray-300 transition-colors focus:outline-none"
              >
                More
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMoreOpen && (
                <ul
                  className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg py-1 z-10"
                  role="menu"
                  aria-label="More submenu"
                >
                  {MORE_ITEMS.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="hidden [@media(min-width:920px)]:block">
            <Button href="/get-started">Get Started</Button>
          </div>

          <div className="[@media(min-width:920px)]:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
