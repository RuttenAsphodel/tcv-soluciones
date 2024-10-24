import React, { useState } from 'react';
import { Laptop, Shield, Wrench, Download, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalServices = () => {
  const [isOpen] = useState(true);

  const services = [
    {
      id: 1,
      title: "Mantenimiento",
      icon: <Wrench className="w-6 h-6" />,
      description: "Servicio completo de mantenimiento preventivo y correctivo para tu computadora.",
      features: [
        "Limpieza de hardware",
        "Optimización del sistema",
        "Actualización de drivers",
        "Diagnóstico completo"
      ]
    },
    {
      id: 2,
      title: "Limpieza",
      icon: <Shield className="w-6 h-6" />,
      description: "Limpieza profesional de componentes internos y externos de tu equipo.",
      features: [
        "Limpieza de teclado",
        "Limpieza de ventiladores",
        "Limpieza de tarjeta madre",
        "Pasta térmica"
      ]
    },
    {
      id: 3,
      title: "Formateo",
      icon: <HardDrive className="w-6 h-6" />,
      description: "Formateo completo del sistema con respaldo de datos y reinstalación.",
      features: [
        "Respaldo de información",
        "Instalación limpia",
        "Configuración inicial",
        "Recuperación de datos"
      ]
    },
    {
      id: 4,
      title: "Instalación de programas",
      icon: <Download className="w-6 h-6" />,
      description: "Instalación y configuración de software necesario para tu trabajo.",
      features: [
        "Programas básicos",
        "Software especializado",
        "Actualización de sistemas",
        "Configuración personalizada"
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Barra lateral */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-72' : 'w-0'}`}>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <Laptop className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-md font-bold text-gray-600">Servicio</p>
              <p className="text-md font-bold text-gray-600">Técnico</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full flex items-center gap-3 p-3 rounded transition-colors
                  ${selectedService.id === service.id 
                    ? 'bg-green-700 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
                  }`}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
   

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Información del servicio */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {selectedService.icon}
                    <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{selectedService.description}</p>
                  
                  <ul className="space-y-4">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-green-600 font-bold">»</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Imagen de laptop */}
                <div className="relative">
                  <img 
                    src="https://mejoralo.cl/wp-content/uploads/2023/01/servicio-tecnico-computacional-1024x683.jpg" 
                    alt="Laptop"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                to="../contacto"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors text-lg font-semibold">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServices;