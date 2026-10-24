import Navbar from "@/components/navbar";
import Sections from "@/components/sections";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <Sections />
      </div>
    </main>
  );
}
