import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center text-black dark:text-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to <span className="text-primary">MySite</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        This is a clean and responsive homepage built with shadcn/ui, TailwindCSS, and React Router.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link to="/about">Learn More</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
