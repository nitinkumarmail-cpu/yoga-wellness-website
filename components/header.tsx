"use client";
import Link from "next/link";
import { ChevronDown, Menu, X, Leaf } from "lucide-react";
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
          {nav.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link className="nav-trigger" href={item.href}>
                {item.label}
                <ChevronDown aria-hidden="true" size={13} strokeWidth={2.2} />
              </Link>
              <div className="nav-dropdown">
                <div className="nav-dropdown-inner">
                  {item.children.map(([label, href]) => (
                    <Link key={`${item.href}-${href}-${label}`} href={href}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            {nav.map((item) => (
              <details className="mobile-nav-group" key={item.href}>
                <summary>
                  {item.label}
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <div>
                  <Link onClick={() => setOpen(false)} href={item.href}>
                    {item.label} overview
                  </Link>
                  {item.children
                    .filter(([, href]) => href !== item.href)
                    .map(([label, href]) => (
                      <Link
                        onClick={() => setOpen(false)}
                        key={`${item.href}-${href}-${label}`}
                        href={href}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </details>
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
