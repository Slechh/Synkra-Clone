import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { navItems } from "../constants/navItems";

export function Navbar() {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between">
        <nav className="flex items-center h-12 gap-6">
          <Link to="/" className="px-3" aria-label="Home">
            <Icon id="logo" className="w-28.5 h-9.5" />
          </Link>
          <ul className="flex gap-6 text-gray">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <button type="button" className="text-birch px-2">
            Sign In
          </button>
          <button
            type="button"
            className="h-11 px-10 bg-dark-blue text-white rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
}
