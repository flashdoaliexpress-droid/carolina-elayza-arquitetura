import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { Projeto } from '@/pages/Projeto';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cream text-olive antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos/:slug" element={<Projeto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
