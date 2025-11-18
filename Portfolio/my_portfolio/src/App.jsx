// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
//       <h1 className="text-5xl font-bold mb-4">Mon Portfolio</h1>
//       <p className="text-xl">React + Vite + Tailwind CSS 4.1.17 prêt à coder !</p>
//       <button className="mt-6 px-6 py-3 rounded-full bg-white text-blue-500 font-semibold hover:bg-gray-100 transition">
//         Commencer
//       </button>
//     </div>
//   );
// }


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
