import Link from "next/link";
import { siteMetadata } from "@/data/site";
import { navLinks } from "@/data/navigation";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteMetadata.name.split(" ")[0]}
          <span className="text-muted">.</span>
        </Link>
        <NavLinks links={navLinks} />
      </nav>
    </header>
  );
}
