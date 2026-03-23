"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { iconMap } from "@/lib/icon-map";
import { navGroups, navPrimaryLinks, siteLogoPath, siteName } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const desktopTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const desktopItemRefs = useRef<Record<string, Array<HTMLAnchorElement | null>>>({});
  const pendingDesktopFocus = useRef<{ groupLabel: string; itemIndex: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("mousedown", onPointerDown);

    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!openDesktopMenu || !pendingDesktopFocus.current) {
      return;
    }

    const { groupLabel, itemIndex } = pendingDesktopFocus.current;

    if (groupLabel !== openDesktopMenu) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      desktopItemRefs.current[groupLabel]?.[itemIndex]?.focus();
      pendingDesktopFocus.current = null;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openDesktopMenu]);

  const MenuIcon = iconMap.Menu;
  const CloseIcon = iconMap.X;
  const ChevronDownIcon = iconMap.ChevronDown;
  const solid = pathname !== "/" || isScrolled || isOpen;
  const transparentHero = !solid;
  const homeLink = navPrimaryLinks[0];
  const contactLink = navPrimaryLinks[1];

  const isGroupActive = (hrefs: string[]) => hrefs.some((href) => pathname === href);

  const focusDesktopTrigger = (groupIndex: number) => {
    const normalizedIndex = (groupIndex + navGroups.length) % navGroups.length;
    const group = navGroups[normalizedIndex];

    if (group) {
      desktopTriggerRefs.current[group.label]?.focus();
    }
  };

  const openMenuAndFocusItem = (groupLabel: string, itemIndex: number) => {
    pendingDesktopFocus.current = { groupLabel, itemIndex };
    setOpenDesktopMenu(groupLabel);
  };

  const focusSiblingMenuItem = (groupLabel: string, currentIndex: number, direction: 1 | -1) => {
    const items = desktopItemRefs.current[groupLabel] ?? [];

    if (!items.length) {
      return;
    }

    const nextIndex = (currentIndex + direction + items.length) % items.length;
    items[nextIndex]?.focus();
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileSection(null);
  };

  const toggleMobileSection = (label: string) => {
    setOpenMobileSection((current) => (current === label ? null : label));
  };

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={[
          "section-shell lg:rounded-full border transition-all duration-300",
          solid
            ? "border-white/70 bg-white/85 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl"
            : "border-white/20 bg-white/10 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-3 sm:px-4">
          <Link href="/" className="focus-ring flex min-w-0 items-center gap-3 rounded-full px-2 py-1">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/60 bg-white shadow-lg shadow-orange-500/20">
              <Image
                src={siteLogoPath}
                alt={`${siteName} logo`}
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className={`truncate font-display text-base leading-none sm:text-lg ${transparentHero ? "text-white" : "text-slate-950"}`}>{siteName}</p>
              <p className={`mt-1 hidden text-xs uppercase tracking-[0.18em] min-[430px]:block ${transparentHero ? "text-white/70" : "text-slate-500"}`}>
                Faith in action
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary navigation">
            <Link
              href={homeLink.href}
              onClick={closeAllMenus}
              className={[
                "focus-ring rounded-full px-3 py-2 text-sm font-medium xl:px-4",
                pathname === homeLink.href
                  ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md"
                  : transparentHero
                    ? "text-white/90 hover:bg-white/15 hover:text-white"
                    : "text-slate-700 hover:bg-orange-50 hover:text-orange-700 hover:shadow-sm",
              ].join(" ")}
            >
              {homeLink.label}
            </Link>

            {navGroups.map((group) => {
              const open = openDesktopMenu === group.label;
              const active = isGroupActive(group.items.map((item) => item.href));
              const menuId = `${group.label.toLowerCase().replace(/\s+/g, "-")}-menu`;
              const groupIndex = navGroups.findIndex((navGroup) => navGroup.label === group.label);

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(group.label)}
                  onMouseLeave={() => setOpenDesktopMenu((current) => (current === group.label ? null : current))}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setOpenDesktopMenu((current) => (current === group.label ? null : current));
                    }
                  }}
                >
                  <button
                    type="button"
                    ref={(element) => {
                      desktopTriggerRefs.current[group.label] = element;
                    }}
                    className={[
                      "focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium xl:px-4",
                      active || open
                        ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md"
                        : transparentHero
                          ? "text-white/90 hover:bg-white/15 hover:text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm",
                    ].join(" ")}
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-haspopup="menu"
                    onClick={() => setOpenDesktopMenu((current) => (current === group.label ? null : group.label))}
                    onKeyDown={(event) => {
                      if (["Enter", " ", "ArrowDown"].includes(event.key)) {
                        event.preventDefault();
                        openMenuAndFocusItem(group.label, 0);
                      }

                      if (event.key === "ArrowUp") {
                        event.preventDefault();
                        openMenuAndFocusItem(group.label, group.items.length - 1);
                      }

                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        setOpenDesktopMenu(null);
                        focusDesktopTrigger(groupIndex + 1);
                      }

                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        setOpenDesktopMenu(null);
                        focusDesktopTrigger(groupIndex - 1);
                      }

                      if (event.key === "Home") {
                        event.preventDefault();
                        setOpenDesktopMenu(null);
                        focusDesktopTrigger(0);
                      }

                      if (event.key === "End") {
                        event.preventDefault();
                        setOpenDesktopMenu(null);
                        focusDesktopTrigger(navGroups.length - 1);
                      }

                      if (event.key === "Escape") {
                        setOpenDesktopMenu(null);
                      }
                    }}
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={[
                        "h-4 w-4 transition-transform duration-200",
                        open ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        id={menuId}
                        role="menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full w-max max-w-[calc(100vw-2rem)] min-w-60 pt-3 xl:min-w-64"
                      >
                        <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-2 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                          <div className="overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-orange-50/80 via-white to-blue-50/80 p-1">
                          {group.items.map((item) => {
                            const itemActive = pathname === item.href;
                            const itemIndex = group.items.findIndex((groupItem) => groupItem.href === item.href);

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                ref={(element) => {
                                  if (!desktopItemRefs.current[group.label]) {
                                    desktopItemRefs.current[group.label] = [];
                                  }

                                  desktopItemRefs.current[group.label][itemIndex] = element;
                                }}
                                onClick={closeAllMenus}
                                onKeyDown={(event) => {
                                  if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    focusSiblingMenuItem(group.label, itemIndex, 1);
                                  }

                                  if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    focusSiblingMenuItem(group.label, itemIndex, -1);
                                  }

                                  if (event.key === "Home") {
                                    event.preventDefault();
                                    desktopItemRefs.current[group.label]?.[0]?.focus();
                                  }

                                  if (event.key === "End") {
                                    event.preventDefault();
                                    desktopItemRefs.current[group.label]?.[group.items.length - 1]?.focus();
                                  }

                                  if (event.key === "ArrowRight") {
                                    event.preventDefault();
                                    const nextGroupIndex = (groupIndex + 1 + navGroups.length) % navGroups.length;
                                    openMenuAndFocusItem(navGroups[nextGroupIndex].label, 0);
                                  }

                                  if (event.key === "ArrowLeft") {
                                    event.preventDefault();
                                    const previousGroupIndex = (groupIndex - 1 + navGroups.length) % navGroups.length;
                                    openMenuAndFocusItem(navGroups[previousGroupIndex].label, 0);
                                  }

                                  if (event.key === "Escape") {
                                    event.preventDefault();
                                    setOpenDesktopMenu(null);
                                    desktopTriggerRefs.current[group.label]?.focus();
                                  }
                                }}
                                className={[
                                  "focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium",
                                  itemActive
                                    ? "bg-white text-orange-700 shadow-sm"
                                    : "text-slate-700 hover:bg-white hover:text-slate-950",
                                ].join(" ")}
                              >
                                <span>{item.label}</span>
                                <span className="text-xs text-slate-400">&rarr;</span>
                              </Link>
                            );
                          })}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href={contactLink.href}
              onClick={closeAllMenus}
              className={[
                "focus-ring rounded-full px-3 py-2 text-sm font-medium xl:px-4",
                pathname === contactLink.href
                  ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md"
                  : transparentHero
                    ? "text-white/90 hover:bg-white/15 hover:text-white"
                    : "text-slate-700 hover:bg-orange-50 hover:text-orange-700 hover:shadow-sm",
              ].join(" ")}
            >
              {contactLink.label}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              onClick={closeAllMenus}
              className={`focus-ring hidden rounded-full px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 sm:inline-flex ${transparentHero ? "border border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25" : "bg-black text-white hover:bg-zinc-900"}`}
            >
              Donate Now
            </Link>
            <button
              type="button"
              className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${transparentHero ? "border-white/30 bg-white/15 text-white backdrop-blur" : "border-slate-200 bg-white/80 text-slate-900"}`}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                setIsOpen((value) => !value);
                setOpenDesktopMenu(null);
              }}
            >
              {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.nav
              key="mobile-menu"
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden px-4 pb-4 lg:hidden"
            >
              <div className="flex flex-col gap-2 rounded-3xl border border-orange-100 bg-orange-50/70 p-3">
                <Link
                  href={homeLink.href}
                  onClick={closeAllMenus}
                  className={[
                    "focus-ring rounded-2xl px-4 py-3 text-sm font-medium",
                    pathname === homeLink.href
                      ? "bg-white text-orange-700 shadow-sm"
                      : "text-slate-700 hover:bg-white/80 hover:text-slate-950",
                  ].join(" ")}
                >
                  {homeLink.label}
                </Link>

                {navGroups.map((group) => {
                  const open = openMobileSection === group.label;
                  const active = isGroupActive(group.items.map((item) => item.href));
                  const sectionId = `${group.label.toLowerCase().replace(/\s+/g, "-")}-mobile-panel`;

                  return (
                    <div key={group.label} className="rounded-2xl bg-white/70">
                      <button
                        type="button"
                        className={[
                          "focus-ring flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium",
                          active ? "text-orange-700" : "text-slate-800",
                        ].join(" ")}
                        aria-expanded={open}
                        aria-controls={sectionId}
                        onClick={() => toggleMobileSection(group.label)}
                      >
                        <span>{group.label}</span>
                        <ChevronDownIcon
                          className={[
                            "h-4 w-4 transition-transform duration-200",
                            open ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {open ? (
                          <motion.div
                            id={sectionId}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 px-2 pb-2">
                              {group.items.map((item) => {
                                const itemActive = pathname === item.href;

                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeAllMenus}
                                    className={[
                                      "focus-ring rounded-2xl px-4 py-3 text-sm font-medium",
                                      itemActive
                                        ? "bg-white text-orange-700 shadow-sm"
                                        : "text-slate-700 hover:bg-white hover:text-slate-950",
                                    ].join(" ")}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Link
                  href={contactLink.href}
                  onClick={closeAllMenus}
                  className={[
                    "focus-ring rounded-2xl px-4 py-3 text-sm font-medium",
                    pathname === contactLink.href
                      ? "bg-white text-orange-700 shadow-sm"
                      : "text-slate-700 hover:bg-white/80 hover:text-slate-950",
                  ].join(" ")}
                >
                  {contactLink.label}
                </Link>

                <Link
                  href="/donate"
                  onClick={closeAllMenus}
                  className="focus-ring mt-2 inline-flex items-center justify-center rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
                >
                  Donate Now
                </Link>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}