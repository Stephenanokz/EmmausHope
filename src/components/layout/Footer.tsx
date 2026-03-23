import Image from "next/image";
import Link from "next/link";
import { iconMap } from "@/lib/icon-map";
import { footerLinks, siteLogoPath, siteMotto, siteName, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white shadow-[0_20px_50px_-28px_rgba(37,99,235,0.6)]">
                <Image
                  src={siteLogoPath}
                  alt={`${siteName} logo`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                {siteName}
              </p>
            </div>
            <h2 className="mt-4 font-display text-3xl text-white">{siteMotto}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
              A faith-based non-profit restoring hope, protecting human dignity, and improving lives through compassionate, sustainable humanitarian service.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link className="focus-ring hover:text-orange-300" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-white">Connect</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = iconMap[item.icon];
                const isPlaceholder = item.href.trim() === "#";

                if (isPlaceholder) {
                  return (
                    <span
                      key={item.label}
                      aria-label={`${item.label} coming soon`}
                      title={`${item.label} coming soon`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-500"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:border-orange-400/60 hover:text-orange-300"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-sm text-slate-300">
              Email: <a className="focus-ring rounded-sm underline decoration-white/30 underline-offset-4 hover:text-white" href="mailto:info@emmaushopefoundation.org">info@emmaushopefoundation.org</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}