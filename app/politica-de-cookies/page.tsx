import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const cookiesNecesarias = [
  {
    cookie: "rc::a",
    owner: "gstatic.com",
    purpose:
      "Esta cookie se utiliza para distinguir entre humanos y bots. Esto es beneficioso para el sitio web, con el fin de realizar informes válidos sobre el uso de su sitio web.",
    expiry: "Permanente"
  },
  {
    cookie: "rc::c",
    owner: "gstatic.com",
    purpose: "Esta cookie se utiliza para distinguir entre humanos y bots.",
    expiry: "De sesión"
  }
];

const cookiesAnaliticas = [
  {
    cookie: "pll_language",
    owner: "https://banclubs.com",
    purpose:
      "Esta cookie se utiliza para determinar el idioma preferido del visitante y establece el idioma correspondiente en el sitio web, si es posible.",
    expiry: "1 año"
  },
  {
    cookie: "_ga",
    owner: "https://banclubs.com",
    purpose:
      "Registra una identificación única que se usa para generar datos estadísticos sobre cómo el visitante usa el sitio web.",
    expiry: "2 años"
  },
  {
    cookie: "_ga_#",
    owner: "https://banclubs.com",
    purpose:
      "Utilizado por Google Analytics para recopilar datos sobre la cantidad de veces que un usuario ha visitado el sitio web, así como fechas de la primera y más reciente visita.",
    expiry: "2 años"
  },
  {
    cookie: "_gat",
    owner: "https://banclubs.com",
    purpose: "Utilizado por Google Analytics para acelerar la tasa de solicitud",
    expiry: "1 día"
  },
  {
    cookie: "_gid",
    owner: "https://banclubs.com",
    purpose:
      "Registra una identificación única que se usa para generar datos estadísticos sobre cómo el visitante usa el sitio web.",
    expiry: "1 día"
  }
];

const cookiesPublicitarias = [
  {
    cookie: "_gcl_au",
    owner: "https://banclubs.com",
    purpose:
      "Utilizado por Google AdSense para experimentar con la eficiencia de la publicidad en los sitios web que utilizan sus servicios.",
    expiry: "3 meses"
  },
  {
    cookie: "ads/ga-audiences",
    owner: "google.com",
    purpose:
      "Se utiliza para detectar si el usuario tiene la intención de abandonar la página mediante movimientos del cursor. Esto permite que el sitio web para activar ciertas ventanas emergentes para mantener al usuario en el sitio web o convertirlo en cliente.",
    expiry: "De sesión"
  },
  {
    cookie: "ads/ga-audiences",
    owner: "google.ie",
    purpose:
      "Se utiliza para detectar si el usuario tiene la intención de abandonar la página mediante movimientos del cursor. Esto permite que el sitio web para activar ciertas ventanas emergentes para mantener al usuario en el sitio web o convertirlo en cliente.",
    expiry: "De sesión"
  }
];

const browserLinks = [
  {
    label:
      "Si utiliza Microsoft Internet Explorer, encontrará la opción en el menú Herramientas > Opciones de Internet > Privacidad > Configuración. Para saber más visite este enlace:",
    href: "http://windows.microsoft.com/es-es/windows7/how-to-manage-Cookies-in-internet-explorer-9",
    text: "http://windows.microsoft.com/es-es/windows7/how-to-manage-Cookies-in-internet-explorer-9"
  },
  {
    label:
      "Si utiliza Firefox, encontrará la opción en el menú Herramientas > Opciones > Privacidad > Cookies. Para saber más visite este enlace:",
    href: "http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-Cookies-que-los-sitios-we",
    text: "http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-Cookies-que-los-sitios-we"
  },
  {
    label:
      "Si utiliza Chrome, en la sección de Opciones > Opciones avanzadas > Privacidad. Para saber más visite este enlace:",
    href: "https://support.google.com/accounts/answer/61416?hl=es",
    text: "https://support.google.com/accounts/answer/61416?hl=es"
  },
  {
    label:
      "Si utiliza Opera, en la opción de Seguridad y Privacidad, podrá configurar el navegador. Para saber más visite este enlace:",
    href: "http://help.opera.com/Windows/11.50/es-ES/cookies.html",
    text: "http://help.opera.com/Windows/11.50/es-ES/cookies.html"
  },
  {
    label:
      "Si utiliza Safari encontrará la opción en el menú Preferencias/Privacidad. Para saber más visite este enlace:",
    href: "http://support.apple.com/kb/HT1677?viewlocale=es_ES",
    text: "http://support.apple.com/kb/HT1677?viewlocale=es_ES"
  },
  {
    label:
      "Si utiliza Microsoft Edge, en la opción de Configuración y más > Configuración > Privacidad, búsqueda y servicios. Para saber más visita este enlace:",
    href: "https://support.microsoft.com/search/results?query=cookies+Microsoft+Edge&isEnrichedQuery=true",
    text: "https://support.microsoft.com/search/results?query=cookies+Microsoft+Edge&isEnrichedQuery=true"
  }
];

const mobileLinks = [
  { label: "IOS", href: "http://goo.gl/61xevS" },
  { label: "Windows Phone", href: "https://goo.gl/tKyb0y" },
  { label: "Chrome Mobile", href: "http://goo.gl/XJp7N" },
  { label: "Opera Mobile", href: "http://goo.gl/Nzr8s7)" }
];

export default function PoliticaCookiesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section hero-surface">
        <div className="container-wide space-y-4">
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">POLÍTICA DE COOKIES</h1>
        </div>
      </section>

      <section className="section bg-white/70">
        <div className="container-wide space-y-8 text-sm text-ink/80">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">POLÍTICA DE COOKIES</h2>
            <p>
              Esta Política de Cookies es parte integrante de los textos legales y la
              Política de Privacidad del (i) sitio web https://banclubs.com (en adelante,
              el “Sitio Web”), propiedad de BANCLUBS, S.L. (en adelante, “BANCLUBS”), con
              NIF B19918093, con domicilio social en CALLE SOROLLA, 53 – BJ B, 28222,
              MAJADAHONDA, MADRID, y correo electrónico a efectos de privacidad:
              contacto@cirqelap-cp88.wordpresstemporal.com
            </p>
            <p>
              El acceso y la navegación en el Sitio Web, así como la aceptación del
              banner correspondiente a las cookies y su configuración implican la
              aceptación de los términos y condiciones recogidos en la presente
              Política de Cookies.
            </p>
            <p>
              Con el fin de facilitar la navegación por el Sitio Web, BANCLUBS le
              comunica que utiliza cookies u otros archivos de funcionalidad similar
              (en adelante, las “Cookies”).
            </p>
            <p>
              En todo caso, le informamos de que BANCLUBS es el responsable de dichas
              Cookies y del tratamiento de los datos obtenidos a través de éstas,
              decidiendo sobre la finalidad, contenido y uso del tratamiento de la
              información recabada. Además, el presente Sitio Web no instala nuestras
              Cookies en los dispositivos de los Usuarios hasta que estos hayan
              aceptado la instalación de estas.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">1. ¿Qué se entiende por una Cookie?</h3>
            <p>
              Las Cookies son archivos que contienen pequeñas cantidades de información
              que se descargan en el dispositivo del usuario cuando visita una página
              web o una aplicación, asociándose únicamente a un usuario anónimo y su
              dispositivo y a veces, proporcionan evidencias que permiten acceder a
              datos personales del usuario.
            </p>
            <p>
              Las Cookies son esenciales para el funcionamiento de Internet, su
              finalidad principal es reconocer al usuario cada vez que accede al Sitio
              Web, permitiendo, además de mejorar la calidad, ofrecer un mejor uso de
              ambos entornos, personalizando los servicios que se ofrecen en esta y
              ofreciendo al usuario información que es de su interés o que puede ser de
              su interés, en atención al uso que realiza de aquellos. En cualquier
              caso, el Usuario podrá acceder a la configuración de su navegador para
              modificar y/o bloquear la instalación de las Cookies enviadas desde el
              Sitio Web, sin que ello impida al acceso a los contenidos.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">2. Uso de Cookies por parte de BANCLUBS</h3>
            <p>
              Los usuarios autorizan expresamente el uso de esta información con las
              finalidades indicadas, a través de los canales habilitados al efecto en el
              Sitio Web, sin perjuicio de su derecho a rechazar, deshabilitar o
              configurar el uso de Cookies. Si se desactivan o se rechazan las Cookies,
              puede que la navegación por el Sitio Web no sea óptima y algunas de las
              utilidades de que disponibles no funcionen correctamente.
            </p>
            <p>
              En concreto, BANCLUBS está utilizando las Cookies para las finalidades
              que a continuación se exponen. Si en un futuro BANCLUBS utilizase otras
              Cookies con el propósito de otorgar más y mejores servicios, se informará
              al usuario de ello.
            </p>
            <p>
              La instalación de dichas Cookies en el dispositivo del usuario se
              producirá siempre de manera posterior a la recogida del consentimiento
              y/o configuración de estas.
            </p>
            <p>
              En esta Política de Cookies se informa de manera general de todas las
              Cookies utilizadas en el Sitio Web. Sin embargo, a efectos informativos
              para el usuario, las Cookies que son necesarias para el funcionamiento
              del Sitio Web estarán activadas por defecto, pudiendo ser, en su caso,
              desactivadas y rechazadas por el usuario, siempre en cumplimiento de la
              normativa vigente.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">3. Tipos y objetivos de las cookies utilizadas</h3>
            <p>
              En el Sitio Web se utilizan cookies propias y de terceros. Según la
              entidad que gestione los datos que se obtengan a través de las Cookies, se
              agrupan de la siguiente manera:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Propias</strong>: Aquéllas que se envían al propio editor que
                presta el servicio solicitado por el usuario.
              </li>
              <li>
                <strong>De terceros</strong>: No son gestionadas por el editor, sino por
                un tercero que es quien gestiona los datos obtenidos a través de las
                Cookies.
              </li>
            </ul>
            <p>En función de su permanencia:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>De sesión:</strong> permanecen durante el acceso y navegación en
                el sitio, se suprimen una vez el usuario abandona el Sitio Web.
              </li>
              <li>
                <strong>Permanentes:</strong> Permanecen almacenadas en el terminal y
                pueden ser accedidos y tratados durante un periodo de tiempo definido
                por el responsable de la Cookie.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">4. Cookies utilizadas en el Sitio Web</h3>
            <p>Las Cookies utilizadas por BANCLUBS son cookies propias y de terceros.</p>

            <h4 className="text-sm font-semibold text-ink">4.1. Cookies necesarias</h4>
            <p>
              Son aquellas cookies consideradas imprescindibles para la navegación por
              ambos entornos, pues facilitan al usuario la utilización de sus
              prestaciones o herramientas como, por ejemplo, identificar la sesión,
              acceder a partes de acceso restringido, garantizar la seguridad de la
              navegación. Sin estas cookies, las funciones mencionadas quedarían
              inhabilitadas.
            </p>
            <p>
              En este sentido, BANCLUBS utiliza estas cookies propias con las siguientes
              finalidades:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Identificar la sesión del usuario para mantenerla activa durante la navegación.</li>
              <li>Identificar la sesión del usuario para evitar posibles ataques y las falsificaciones de peticiones.</li>
              <li>Identificar la configuración de cookies del usuario.</li>
              <li>Identificar el servidor utilizado por el usuario.</li>
              <li>Configuración de la seguridad del firewall web.</li>
              <li>Verificar la conexión con los servidores (en estos casos estas cookies pueden ser de terceros, pero siempre tendrán la finalidad descrita).</li>
              <li>Optimizar el tiempo de respuesta en la web con la función de cache.</li>
            </ul>

            <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-sand text-ink">
                  <tr>
                    <th className="px-4 py-3">COOKIES</th>
                    <th className="px-4 py-3">PROPIETARIO</th>
                    <th className="px-4 py-3">FINALIDAD</th>
                    <th className="px-4 py-3">CADUCIDAD</th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesNecesarias.map((row) => (
                    <tr key={`${row.cookie}-${row.owner}`} className="border-t border-ink/10">
                      <td className="px-4 py-3">{row.cookie}</td>
                      <td className="px-4 py-3">{row.owner}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3">{row.expiry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-sm font-semibold text-ink">4.2. Cookies analíticas</h4>
            <p>
              Estas cookies sirven para analizar la navegación del usuario por el Sitio
              Web, así como realizar una contabilidad de estas. Algunas de estas cookies
              identifican al usuario, mientras que otras solo utilizan datos agregados.
            </p>
            <p>
              BANCLUBS, a través del Sitio Web, utiliza Cookies propias para la seguridad
              de ambos entornos como a nivel analítico. En concreto dichas Cookies son:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-sand text-ink">
                  <tr>
                    <th className="px-4 py-3">COOKIES</th>
                    <th className="px-4 py-3">PROPIETARIO</th>
                    <th className="px-4 py-3">FINALIDAD</th>
                    <th className="px-4 py-3">CADUCIDAD</th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesAnaliticas.map((row) => (
                    <tr key={`${row.cookie}-${row.owner}`} className="border-t border-ink/10">
                      <td className="px-4 py-3">{row.cookie}</td>
                      <td className="px-4 py-3">{row.owner}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3">{row.expiry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-sm font-semibold text-ink">4.3. Cookies publicitarias comportamentales</h4>
            <p>
              Son aquellas que, tratadas por nosotros o por terceros, nos permiten
              analizar sus hábitos de navegación en Internet para que podamos mostrarle
              publicidad relacionada con su perfil de navegación.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-sand text-ink">
                  <tr>
                    <th className="px-4 py-3">COOKIES</th>
                    <th className="px-4 py-3">PROPIETARIO</th>
                    <th className="px-4 py-3">FINALIDAD</th>
                    <th className="px-4 py-3">CADUCIDAD</th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesPublicitarias.map((row, index) => (
                    <tr key={`${row.cookie}-${row.owner}-${index}`} className="border-t border-ink/10">
                      <td className="px-4 py-3">{row.cookie}</td>
                      <td className="px-4 py-3">{row.owner}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3">{row.expiry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">5. Configuración del usuario para evitar Cookies</h3>
            <p>
              En cumplimiento de la normativa vigente, el usuario puede configurar la
              instalación de Cookies en el Sitio Web en los canales específicamente
              habilitados. Mediante esta herramienta, el Usuario puede aceptar todas
              las Cookies, rechazarlas todas (en su caso, aquellas que no sean necesarias
              para el funcionamiento de la web) o configurarlas gradualmente.
            </p>
            <p>
              De igual manera, BANCLUBS pone a disposición de los usuarios del Sitio Web
              la información que les permita configurar su navegador/navegadores de
              Internet para mantener su privacidad y seguridad en relación con las
              Cookies. Por ello, se facilita la información y los enlaces a los sitios
              de soporte oficiales de los principales navegadores para que cada usuario
              pueda decidir si desea o no aceptar el uso de Cookies.
            </p>
            <p>
              Así, es posible bloquear las Cookies a través de las herramientas de
              configuración del navegador, o bien, cada usuario puede configurar su
              navegador para que le avise cuando un servidor quiera guardar una Cookie:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {browserLinks.map((item) => (
                <li key={item.href}>
                  {item.label}{" "}
                  <a className="text-ink underline" href={item.href} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                  .
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">6. Cookies en los dispositivos móviles</h3>
            <p>
              BANCLUBS también usa cookies u otros dispositivos de almacenamiento en
              dispositivos móviles. Aquellas cookies que no sean obligatorias para la
              navegación del presente Sitio Web podrán deshabilitarse en la
              configuración del Sitio Web.
            </p>
            <p>
              Estos ajustes se encuentran en el pie de página del Sitio Web. Además, al
              igual que sucede en los navegadores de ordenadores, lo navegadores de los
              dispositivos móviles permiten realizar cambios en las opciones o ajustes
              de privacidad para desactivar o eliminar las cookies.
            </p>
            <p>
              Si desea modificar las opciones de privacidad siga las instrucciones
              especificadas por el desarrollador de su navegador para dispositivo móvil.
              A continuación, podrá encontrar algunos ejemplos de los links que le
              guiarán para modificar las opciones de privacidad en su dispositivo móvil:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {mobileLinks.map((item) => (
                <li key={item.href}>
                  {item.label}:{" "}
                  <a className="text-ink underline" href={item.href} target="_blank" rel="noreferrer">
                    {item.href}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">7. Información en relación con sus datos</h3>
            <p>
              Para poder ejercitar cualquiera de sus derechos en materia de protección
              de datos, así como para poder conocer los (i) Fines del tratamiento y base
              jurídica del tratamiento; (ii) Destinatarios o categorías de destinatarios
              de los datos personales; (iii) Transferencias internacionales; (iv) Plazo
              de conservación; (v) Derechos de los interesados; (vi) Existencia de
              decisiones automatizadas, incluida la elaboración de perfiles, puede
              acceder a la Política de Privacidad de BANCLUBS.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-ink">8. Modificaciones de la Política de Cookies</h3>
            <p>
              Esta Política de Cookies podría ser modificada en función de las
              exigencias legislativas, reglamentarias, o con la finalidad de adaptar
              dicha política a las instrucciones dictadas por la Agencia Española de
              Protección de Datos. Por ello, se aconseja a los usuarios que la visiten
              periódicamente. Cuando se produzcan cambios significativos en esta
              Política de Cookies, se comunicarán a los usuarios a través de correo
              electrónico.
            </p>
            <p>Última actualización: 8 de octubre de 2024.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
