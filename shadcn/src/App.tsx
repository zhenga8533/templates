import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { ThemeProvider } from "./components/theme-provider";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
