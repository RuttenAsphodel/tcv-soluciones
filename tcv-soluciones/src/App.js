import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkedIn from './components/auxiliar/LinkedIn';
import Whatsapp from './components/auxiliar/FloatingWhatsApp';
import Navbar from './components/navbar/navbar';
import Inicio from './components/inicio/inicio';
import ServiciosTech from './components/services/techservices';
import ServiciosWeb from './components/services/webservices';
import Nosotros from './components/about/nosotros';
import Contacto from './components/contact/contact';
import Footer from './components/auxiliar/Footer';


function App() {
  return (
      
    <Router>
      <Navbar position ="fixed" />
      <LinkedIn username="cristian-v-31700a77"/>
      <Whatsapp 
        phoneNumber="56989376647" // Reemplaza con el número de WhatsApp
        message="Hola! Estoy interesado en sus servicios." 
      />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/serviciosweb" element={<ServiciosWeb />} />
        <Route path="/serviciostech" element={<ServiciosTech />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer position ="absolute" />
      
    </Router>

  
  );
}

export default App;
