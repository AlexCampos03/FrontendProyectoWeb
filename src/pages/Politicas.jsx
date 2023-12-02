import React, { useState } from 'react';
// Suponiendo que tienes una imagen llamada 'background.jpg' en la carpeta 'assets'
import backgroundImage from '../assets/Nosotros.png';

const NosotrosPage = () => {

  const overlayStyle = {
    backgroundColor: 'rgba(0, 59, 113, 1)', // El color de superposición con transparencia
    mixBlendMode: 'overlay' // Esto aplica el efecto de mezcla de color
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };



  return (
    <div className="container mx-auto p-4 ">
      {/* Sección de bienvenida con imagen de fondo y superposición */}
      <div
        className="text-center p-20 rounded-lg shadow-md relative"
        style={{
          color: 'white',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden' // Asegúrate de que los bordes redondeados contienen la superposición
        }}
      >
        {/* Superposición sobre la imagen de fondo */}
        <div className="absolute inset-0" style={overlayStyle}></div>
        {/* Contenido de texto */}
        <div className="relative z-10"> {/* Este div asegura que el texto esté sobre la superposición */}
          <h1 className="text-3xl font-bold">CONOCE SOBRE NOSOTROS</h1>
        </div>
      </div>
      <br></br>

      {/* Secciones Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-">MISIÓN</h2>
          <p>
            {/* Inserta el texto de tu misión aquí */}
            Conectar a individuos talentosos y ambiciosos con oportunidades laborales y de pasantías en un entorno digital confiable y fácil de usar. Nos esforzamos por brindar a nuestros usuarios las herramientas y recursos necesarios para avanzar en sus carreras profesionales y contribuir al crecimiento de las organizaciones. Buscamos transformar la forma en que las personas acceden a oportunidades profesionales y facilitar una transición más fluida hacia carreras exitosas y satisfactorias, manteniendo nuestro compromiso con la excelencia y la innovación.
          </p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-3">VISIÓN</h2>
          <p>
            {/* Inserta el texto de tu visión aquí */}
            Nos visualizamos como la principal plataforma en línea para la búsqueda y conexión de talento, donde los profesionales y estudiantes encuentran oportunidades que se alinean con sus metas y habilidades. Aspiramos a transformar la forma en que las personas acceden a oportunidades profesionales, facilitando una transición más fluida hacia carreras exitosas y satisfactorias. Nuestro compromiso es fomentar un mundo laboral inclusivo y dinámico, impulsado por la excelencia y la innovación.
          </p>
        </div>
      </div>

      {/* Política de Privacidad */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-xl font-bold mb-3 text-center">POLÍTICA DE PRIVACIDAD</h2>
        <p>
          {/* Inserta el texto de tu política de privacidad aquí */}
          Bienvenido a PROFESSIONNET, una plataforma en línea que conecta a profesionales y estudiantes con oportunidades laborales y de pasantías. Nos tomamos muy en serio la privacidad y seguridad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información que nos proporciona de acuerdo con las leyes de privacidad aplicables en El Salvador.
          <br></br>
          <p>
            <br></br>
            Información que Recopilamos
            <ol>
              <li> 1.  Información de Registro: Al registrarse en PROFESSIONNET, recopilamos información como su nombre, dirección de correo electrónico, contraseña y otros datos relevantes necesarios para crear su cuenta.</li>
              <br></br>
              <li> 2.  Perfil de Usuario: Puede proporcionar información adicional en su perfil, como educación, experiencia laboral, habilidades, intereses y enlaces a redes sociales. Esta información es visible para otros usuarios de la plataforma.</li>
              <br></br>
              <li> 3.  Interacciones y Actividades: Recopilamos información sobre sus interacciones y actividades en la plataforma, como las ofertas a las que ha aplicado, mensajes enviados y recibidos, y otras interacciones con otros usuarios. </li>
              <br></br>
              <li> 4.  Información Automática: Utilizamos tecnologías como cookies y registros del servidor para recopilar información sobre su dispositivo, dirección IP, navegador web, páginas visitadas y otras actividades en la plataforma. </li>
            </ol>
          </p>
          <br></br>

          <p>
            Uso de la Información
            <br></br>
            Utilizamos la información recopilada para:
            Facilitar la creación y gestión de su cuenta en PROFESSIONNET.
            Conectarlo con oportunidades laborales y de pasantías relevantes.
            Personalizar su experiencia en la plataforma y proporcionar recomendaciones basadas en sus intereses y habilidades.
            Comunicarnos con usted sobre su cuenta, ofertas relevantes y actualizaciones de la plataforma.
            Mejorar y optimizar nuestros servicios, incluyendo análisis de datos y desarrollo de nuevas características.
          </p>
          <br></br>

          <p>
            Compartir Información
            <br></br>
            Usuarios y Empleadores: Su perfil y la información que elija compartir pueden ser visibles para otros usuarios y empleadores en la plataforma, dependiendo de sus configuraciones de privacidad.
            Análisis y Terceros de Confianza: Podemos compartir información agregada y no identificable con terceros de confianza para análisis y mejoras en nuestros servicios.
            Cumplimiento Legal: En ciertas circunstancias, podemos divulgar su información en respuesta a solicitudes legales de autoridades gubernamentales o conforme a la ley aplicable en El Salvador.
          </p>
          <br></br>

          <p>
            Seguridad de la Información
            <br></br>
            Implementamos medidas de seguridad adecuadas para proteger su información contra el acceso no autorizado, alteración, divulgación o destrucción no autorizada.
            Acceso y Control de su Información
            Puede acceder, corregir o eliminar su información en cualquier momento a través de su cuenta en PROFESSIONNET.
            Cambios en la Política de Privacidad
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento y notificar cualquier cambio a través de la plataforma o por correo electrónico.
          </p>
          <br></br>

          <p>
            Contacto
            <br></br>
            Si tiene preguntas o inquietudes sobre nuestra política de privacidad, puede ponerse en contacto con nosotros en professionnet2023@gmail.com.
          </p>
        </p>
      </div>
    </div>

  );
};

export default NosotrosPage;