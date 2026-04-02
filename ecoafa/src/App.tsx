// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import EmailButton from './components/layout/Emailbutton'


import Home from './pages/Home'
 import Nosotros from './pages/Nosotros'
 import Experiencia from './pages/Experiencia/Experiencia'
import Ambiental from './pages/services/Ambiental'
import Forestal from './pages/services/Forestal'
import Territorial from './pages/services/Territorial'
import Agropecuario from './pages/services/Agropecuario'


function PagePlaceholder({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-black text-[#7DC242] uppercase tracking-widest mb-4">{title}</h1>
        <p className="text-white/40">Página en construcción</p>
      </div>
    </main>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <EmailButton />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/servicios/ambiental" element={<Ambiental />} />
          <Route path="/servicios/forestal" element={<Forestal />} />
          <Route path="/servicios/territorial" element={<Territorial />} />
          <Route path="/servicios/agropecuario" element={<Agropecuario />} />
         
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App