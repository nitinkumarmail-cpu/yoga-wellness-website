"use client";
import Link from "next/link";
import { ChevronDown, Menu, X, Leaf } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setExpandedGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      window.requestAnimationFrame(() => {
        mobileMenuRef.current?.querySelector<HTMLElement>("button, a")?.focus();
      });
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setExpandedGroup(null);
  };

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
          ref={menuButtonRef}
          type="button"
          className="menu-btn"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mobile-menu" ref={mobileMenuRef}>
          <nav aria-label="Mobile navigation">
            {nav.map((item, index) => {
              const groupId = `mobile-nav-${index}`;
              const expanded = expandedGroup === item.href;
              return (
              <div className={`mobile-nav-group${expanded ? " is-open" : ""}`} key={item.href}>
                <button
                  type="button"
                  className="mobile-nav-trigger"
                  aria-expanded={expanded}
                  aria-controls={groupId}
                  onClick={() => setExpandedGroup(expanded ? null : item.href)}
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" size={18} />
                </button>
                <div id={groupId} className="mobile-nav-links" hidden={!expanded}>
                  <Link onClick={closeMenu} href={item.href}>
                    {item.label} overview
                  </Link>
                  {item.children
                    .filter(([, href]) => href !== item.href)
                    .map(([label, href]) => (
                      <Link
                        onClick={closeMenu}
                        key={`${item.href}-${href}-${label}`}
                        href={href}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>
            )})}
            <Link
              onClick={closeMenu}
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
