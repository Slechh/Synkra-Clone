import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { Container } from "./Conatiner";
import { Icon } from "./Icon";

import { navItems } from "../constants/navItems";

export function Navbar() {
  return (
    <header>
      <Container>
        <div className="py-4">
          <nav className="flex items-center justify-between h-12">
            <div className="flex items-center  gap-6">
              <Link to="/" className="px-3" aria-label="Home">
                <Icon id="logo" className="w-28.5 h-9.5" />
              </Link>
              <ul className="flex gap-7 text-gray">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        clsx(
                          "relative block transition-all duration-300 hover:text-dark-blue/70",
                          isActive &&
                            "text-dark-blue -translate-y-0.5 flex justify-center",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          {/* <span
                        className={clsx(
                          "absolute -bottom-1 left-1/4 h-0.5 w-1/2 origin-center rounded-t-md bg-black transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      /> */}
                          {isActive && (
                            <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-black rounded-t-md" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 font-medium">
              <button
                type="button"
                className="text-birch px-2 hover:text-birch/70 transition-colors duration-300"
              >
                Sign In
              </button>
              <button
                type="button"
                className="h-11 px-10 bg-dark-blue text-white rounded-lg hover:bg-dark-blue/90 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
