import Link from "next/link";
import { navItems } from "@/data";

export const Nav = () => {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="nav-logo">
          ~/mirza-yousuf
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.link}>
              <Link href={item.link} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
