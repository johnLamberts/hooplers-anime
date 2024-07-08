import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = (
    <>
      <div className="mr-4 hidden md:flex">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <img src="hooplers-logo.png" />
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            to="/home"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/home" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Home
          </Link>
          <Link
            to="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Read Manga
          </Link>
          <Link
            to="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            News
          </Link>
        </nav>
      </div>
    </>
  );
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {navItems}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8 bg-primary/25 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
