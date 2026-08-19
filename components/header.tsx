"use client";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.fullName} home`}>
          <span>
            <Leaf size={20} />
          </span>
          <b>
            {site.name}
            <small>{site.fullName}</small>
          </b>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-primary desktop-cta" href="/book">
          Book your session
        </Link>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {nav.map(([l, h]) => (
              <Link onClick={() => setOpen(false)} key={h} href={h}>
                {l}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              href="/book"
            >
              Book your session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
