import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full shadow-sm px-6 py-4 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black dark:text-white">
          MySite
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-2">
            {navItems.map(({ to, label }) => (
              <Button
                key={to}
                variant="ghost"
                asChild
                className={cn(
                  "text-base text-black dark:text-white",
                  location.pathname === to && "underline font-semibold"
                )}
              >
                <Link to={to}>{label}</Link>
              </Button>
            ))}
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map(({ to, label }) => (
                  <Button
                    key={to}
                    variant="ghost"
                    asChild
                    className={cn("justify-start text-lg", location.pathname === to && "underline font-semibold")}
                    onClick={() => setOpen(false)}
                  >
                    <Link to={to}>{label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
