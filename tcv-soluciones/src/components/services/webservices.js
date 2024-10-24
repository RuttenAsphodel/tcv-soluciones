import React, { useState } from 'react';
import { Code, Layout, Database, Wrench, GitBranch } from 'lucide-react';
import { WebhookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebServices = () => {
  const [isOpen] = useState(true);

  const services = [
    {
      id: 1,
      title: "Sitios Web Personalizados",
      icon: <Layout className="w-6 h-6" />,
      description: "Sitios web responsivos, optimizados para SEO y con carga rápida. Adaptados completamente a tus necesidades específicas.",
      features: ["Diseño Responsivo", "Optimización SEO", "Carga Rápida", "Personalización Total"],
      technologies: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Desarrollo Full-Stack",
      icon: <Code className="w-6 h-6" />,
      description: "Desarrollo integral de aplicaciones web usando las últimas tecnologías tanto en frontend como en backend.",
      features: ["Frontend Moderno", "Backend Robusto", "APIs RESTful", "Seguridad"],
      technologies: ["React", "Node.js", "Express", "Django"]
    },
    {
      id: 3,
      title: "Gestión de Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      description: "Diseño e implementación de bases de datos optimizadas para tu proyecto.",
      features: ["Diseño de BD", "Optimización", "Migración", "Backup"],
      technologies: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Mantenimiento",
      icon: <Wrench className="w-6 h-6" />,
      description: "Servicio de mantenimiento y corrección de errores para mantener tu sitio web funcionando perfectamente.",
      features: ["Monitoreo", "Actualizaciones", "Corrección de Bugs", "Optimización"],
      technologies: ["DevOps", "CI/CD", "Testing"]
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Barra lateral */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-72' : 'w-0'}`}>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
          <WebhookIcon className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-md font-bold text-gray-600">Servicios</p>
              <p className="text-md font-bold text-gray-600">Web</p>
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
      <div className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              {selectedService.icon}
              <h1 className="text-3xl font-bold text-gray-800">{selectedService.title}</h1>
            </div>
            
            <p className="text-gray-600 text-lg mb-8">{selectedService.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Características */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Características</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <GitBranch className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tecnologías */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-green-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
              to="../contacto"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-800 transition-colors">
                ¡Solicitar información!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServices;