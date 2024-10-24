import React from 'react';

const Nosotros = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Desarrollador Web Profesional</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sitios Web Personalizados, Aplicaciones Web y Mantenimiento</h2>
      <p className="text-gray-700 mb-6">
        ¿Buscas un <span className="font-bold text-blue-600">Desarrollador web confiable</span> para dar vida a tu visión? ¡No busques más!
        Me especializo en la creación de sitios web y aplicaciones web a medida, adaptados a tus necesidades. Con una sólida experiencia
        en desarrollo front-end y back-end, puedo ofrecerte soluciones de alta calidad para tu negocio o proyecto personal.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">Servicios que ofrezco:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Sitios web personalizados (Responsivos, optimizados para SEO y con carga rápida)</li>
        <li>Aplicaciones web (Adaptadas a tus requerimientos específicos)</li>
        <li>Desarrollo Front-End (HTML5, CSS3, JavaScript, React)</li>
        <li>Desarrollo Back-End (Node.js, Django, Express)</li>
        <li>Gestión de bases de datos (MySQL, MongoDB)</li>
        <li>Corrección de errores y mantenimiento de sitios web</li>
        <li>Integración de APIs y automatización</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">¿Por qué elegirme a mí?</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Experto en full-stack</li>
        <li>Código limpio, eficiente y escalable</li>
        <li>Diseños intuitivos y funcionalidad fluida</li>
        <li>¡Garantía de satisfacción al 100%!</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">¿Cómo funciona?</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Comparte los detalles y objetivos de tu proyecto</li>
        <li>Te proporcionaré un plan y un cronograma personalizado</li>
        <li>¡Relájate mientras desarrollo la solución a medida para ti!</li>
      </ul>

      <div className="text-center">
        <a
          href="#1"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          ¡Envíame un mensaje para discutir tu proyecto hoy mismo!
        </a>
      </div>
    </div>
  );
};

export default Nosotros;
