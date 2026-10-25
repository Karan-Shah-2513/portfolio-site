import Navbar from "@/components/navbar";
import Sections from "@/components/sections";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Sections />
      </main>
      <footer className="mx-auto flex w-[min(1120px,calc(100%-48px))] flex-wrap justify-between gap-4 border-t border-border/60 py-5 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Karan Shah</span>
        <span>Built with React, Tailwind CSS, and curiosity.</span>
        <a className="text-primary hover:underline" href="#about">Back to top ↑</a>
      </footer>
    </div>
  );
}
