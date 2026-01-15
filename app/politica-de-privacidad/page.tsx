import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const personalData = ["Correo electrónico;", "Nombre y apellidos;"];

const purposes = [
  {
    title: "Identificación y Onboarding de los Usuarios para la prestación de servicios",
    description:
      "Poder identificar al Usuario para que pueda acceder a los servicios prestados en el Sitio Web, así como los datos necesarios para poder llevarlos a cabo."
  },
  {
    title: "Responder a las cuestiones planteadas en los formularios de contacto y correo electrónico",
    description:
      "Gestionar, tramitar y dar respuesta a las peticiones, solicitudes, incidencias o consultas del Usuario."
  },
  {
    title: "Atender el ejercicio de derechos de los Usuarios",
    description:
      "Tramitar, analizar, contestar y, en su caso, ejecutar el ejercicio de derechos solicitado por el Usuario de conformidad con lo establecido en la presente Política de Privacidad."
  },
  {
    title: "Realización de encuestas de calidad y satisfacción",
    description:
      "Realización de consultas a los Usuarios relativas a la calidad y su satisfacción con los servicios proporcionados por BANCLUBS. Análisis de los informes y estadísticas obtenidos de las respuestas de los Usuarios."
  },
  {
    title: "Envío de comunicaciones comerciales",
    description:
      "Envío de comunicaciones comerciales a través de medios telemáticos o convencionales sobre BANCLUBS."
  }
];

const legitimation = [
  {
    title: "Identificación y Onboarding de los Usuarios para la prestación de servicios",
    description:
      "El tratamiento de datos derivado de esta finalidad es el cumplimiento de la relación contractual a petición del Usuario de medidas precontractuales, así como en ciertas ocasiones para el cumplimiento de una obligación legal cuando así lo prevea la normativa aplicable."
  },
  {
    title: "Responder a las cuestiones planteadas en los formularios de contacto",
    description:
      "El tratamiento de datos derivado de esta finalidad es el cumplimiento de la relación contractual a petición del Usuario de medidas precontractuales."
  },
  {
    title: "Atender el ejercicio de derechos de los Usuarios",
    description:
      "Todos los tratamientos derivados de esta finalidad tendrán como base de legitimación el cumplimiento de obligaciones legales, conforme lo establecido en la normativa aplicable en materia de protección de datos."
  },
  {
    title: "Realización de encuestas de calidad y satisfacción",
    description:
      "Los tratamientos derivados de la realización de encuestas de calidad y satisfacción tendrán como base de legitimación el interés legítimo, reconocido al responsable del tratamiento por la normativa. Este interés legítimo está basado en poder ofrecer a los Usuarios los servicios de CLIENTE, tanto en el Sitio Web con la mayor calidad y mejor experiencia posible para el Usuario"
  },
  {
    title: "Envío de comunicaciones comerciales",
    description:
      "El tratamiento derivado de esta finalidad tendrá como base de legitimación el consentimiento, reconocido al responsable del tratamiento por la normativa."
  }
];

const sharedWith = [
  "Las Administraciones Públicas en los casos previstos en la ley.",
  "Juzgados y Tribunales en los casos previstos en la ley.",
  "Las Fuerzas y Cuerpos de Seguridad del Estado en los casos previstos en la ley.",
  "Las empresas que forman parte del grupo de BANCLUBS para fines administrativos internos.",
  "Las empresas con quienes BANCLUBS lleve a cabo operaciones mercantiles, siempre que los tratamientos sean necesarios para el buen fin de la operación y garanticen, cuando proceda, la continuidad en la prestación de los servicios ofrecidos a los Usuarios."
];

const retention = [
  {
    title: "Identificación y Onboarding de los Usuarios para la prestación de servicios",
    description:
      "serán conservados durante el plazo necesario para la prestación de servicios desde el Sitio Web a solicitud del Usuario y, una vez finalizado los mismos, durante el plazo de prescripción de las acciones legales derivadas de la citada prestación de servicios."
  },
  {
    title: "Datos facilitados a través de formularios de contacto",
    description:
      "serán conservados durante el plazo necesario para dar trámite y contestación a su solicitud y, una vez finalizado el mismo, durante el plazo de prescripción de las acciones legales derivadas de la citada solicitud."
  },
  {
    title: "Datos utilizados para atender el ejercicio de derechos de Usuarios",
    description:
      "serán conservados durante el plazo necesario para llevar a cabo el derecho solicitado por el Usuario y, una vez cumplido con dicho derecho, se conservarán hasta la prescripción de las eventuales responsabilidades derivadas de este tratamiento."
  },
  {
    title: "Realización de encuestas de calidad y satisfacción",
    description:
      "serán conservadas durante el tiempo que sea necesario para prestarle los servicios a los Usuarios y hasta que éste se oponga o dejen de ser necesarios para cumplir con la finalidad establecida y hayan prescrito las eventuales responsabilidades derivadas de la prestación de los servicios."
  },
  {
    title: "Datos utilizados para el envío de comunicaciones comerciales",
    description: "serán tratados hasta que el Usuario se oponga o revoque su consentimiento."
  }
];

const responsibilities = [
  "Garantiza que es mayor de dieciocho (18) años y que los datos que facilita BANCLUBS son verdaderos, exactos, completos y actualizados. A estos efectos, el Usuario responde de la veracidad de todos los datos que comunique y mantendrá convenientemente actualizada la información facilitada, de tal forma que responda a su situación real.",
  "Garantiza que ha informado a los terceros de los que facilite sus datos, en caso de hacerlo, de los aspectos contenidos en este documento. Asimismo, garantiza que ha obtenido su autorización para facilitar sus datos a BANCLUBS para los fines señalados.",
  "Será responsable de las informaciones falsas o inexactas que proporcione a través de la Sitio Web y de los daños y perjuicios, directos o indirectos, que ello cause a BANCLUBS o a terceros."
];

const rights = [
  "Revocar los consentimientos otorgados.",
  "Obtener confirmación acerca de si en BANCLUBS se están tratando datos personales que conciernen al Usuario o no.",
  "Acceder a sus datos personales.",
  "Rectificar los datos inexactos o incompletos.",
  "Solicitar la supresión de sus datos cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.",
  "Obtener de BANCLUBS la limitación del tratamiento de los datos cuando se cumpla alguna de las condiciones previstas en la normativa de protección de datos.",
  "Solicitar la portabilidad de los datos facilitados por el Usuario en aquellos casos previstos en la normativa."
];

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section hero-surface">
        <div className="container-wide space-y-4">
          <p className="eyebrow">Textos legales</p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
            Política de privacidad y protección de datos
          </h1>
          <p className="text-ink/70">
            Información sobre el tratamiento de los datos personales facilitados a
            través del sitio web.
          </p>
        </div>
      </section>

      <section className="section bg-white/70">
        <div className="container-wide space-y-8 text-sm text-ink/80">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">1. IDENTIFICACIÓN</h2>
            <ul className="space-y-2">
              <li>Titular: BANCLUBS, S.L. (en adelante, “Responsable”);</li>
              <li>
                Domicilio social: CALLE SOROLLA, 53 – BJ B, 28222, MAJADAHONDA, MADRID,
                ESPAÑA
              </li>
              <li>N.I.F.: B19918093</li>
              <li>Contacto: CONTACTO@BANCLUBS.COM</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">2. INFORMACIÓN</h2>
            <p>
              Mediante la presente Política de Privacidad, el usuario (en adelante, el
              “Usuario”) queda informado de forma inequívoca que los datos personales
              que facilite a través del sitio web https://banclubs.com (en adelante,
              el “Sitio Web”), y entornos análogos como formularios o e-mail de
              contacto, serán tratados por el Responsable de acuerdo con lo
              establecido en la presente Política de Privacidad.
            </p>
            <p>
              El Usuario debe leer con atención esta Política de Privacidad, que ha
              sido redactada de forma clara y sencilla, para facilitar su comprensión.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3. OBLIGATORIEDAD DE FACILITAR LOS DATOS DE CARÁCTER PERSONAL
            </h2>
            <p>
              Los datos solicitados en los formularios del Sitio Web son con carácter
              general obligatorios (salvo que en el campo requerido se especifique lo
              contrario) para cumplir con las finalidades para las que están siendo
              recabados.
            </p>
            <p>
              Por lo tanto, si no se facilitan los mismos o no se facilitan
              correctamente, BANCLUBS no podrá prestar sus servicios de forma adecuada.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4. DATOS PERSONALES RECABADOS EN EL SITIO WEB
            </h2>
            <p>Los datos personales que podrán ser recabados por BANCLUBS en el Sitio Web son los siguientes:</p>
            <ul className="list-disc space-y-2 pl-5">
              {personalData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-ink">
              5. FINALIDAD DE TRATAMIENTO LOS DATOS DEL USUARIO POR PARTE DE BANCLUBS
            </h2>
            <p>
              Los datos personales facilitados a través del Sitio Web serán tratados
              por BANCLUBS conforme a las siguientes finalidades:
            </p>
            <div className="space-y-4">
              {purposes.map((purpose) => (
                <div key={purpose.title} className="space-y-2">
                  <p className="font-semibold text-ink">{purpose.title}</p>
                  <p>{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-ink">
              6. BASE DE LEGITIMACIÓN DEL TRATAMIENTO DE LOS DATOS DEL USUARIO POR PARTE DE
              BANCLUBS
            </h2>
            <p>La legitimación del tratamiento de los datos personales del Usuario, serán las siguientes:</p>
            <div className="space-y-4">
              {legitimation.map((item) => (
                <div key={item.title} className="space-y-2">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <p>
              El Usuario tiene derecho a oponerse al tratamiento de sus datos personales
              con la finalidad de enviar comunicaciones comerciales personalizadas, en
              cualquier momento y sin coste alguno. El usuario podrá manifestar dicha
              oposición clicando en el enlace establecido para darse de baja de las
              comunicaciones comerciales o dirigiendo un e-mail a la siguiente dirección
              de correo electrónico: contacto@cirqelap-cp88.wordpresstemporal.com
            </p>
            <p>
              Asimismo, en el caso de que el Usuario prestase su consentimiento para que
              BANCLUBS tratase sus datos para alguna finalidad adicional a las
              mencionadas en la presente Política de Privacidad, el Usuario será
              debidamente informado de dicho tratamiento, estado el propio Usuario
              facultado para revocar dicho consentimiento contactando con BANCLUBS a
              través del siguiente correo electrónico:
              contacto@cirqelap-cp88.wordpresstemporal.com
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">7. ¿A QUIÉN SE COMPARTIRÁN LOS DATOS DEL USUARIO?</h2>
            <p>Los datos del Usuario podrán ser comunicados a:</p>
            <ul className="list-disc space-y-2 pl-5">
              {sharedWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">8. TRANSFERENCIAS INTERNACIONALES DE DATOS</h2>
            <p>
              BANCLUBS no tiene intención de transferir los datos personales de los
              Usuarios a un tercer país u organización internacional. No obstante, en
              el caso de que así fuera, se informaría expresamente a los Usuarios de
              esta circunstancia indicándoles la existencia o ausencia de una decisión
              de adecuación de la Comisión Europea, o, de las garantías adecuadas y los
              medios para obtener una copia de estas.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">9. CONSERVACIÓN DE LOS DATOS</h2>
            <p>Los datos del Usuario serán conservados durante los siguientes plazos:</p>
            <ul className="list-disc space-y-2 pl-5">
              {retention.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>
            <p>
              En cualquier caso, BANCLUBS bloqueará debidamente los datos personales de
              los Usuarios, no teniendo acceso a los mismos en el momento en que éstos
              dejen de ser necesarios para cumplir con la finalidad para la que fueron
              recabados, siendo solamente tratados en caso de que así sea requerido por
              la autoridad judicial o administrativa competente en los supuestos
              expresamente establecidos en la Ley.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">10. RESPONSABILIDAD DEL USUARIO</h2>
            <p>El Usuario:</p>
            <ul className="list-disc space-y-2 pl-5">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">11. EJERCICIO DE DERECHOS</h2>
            <p>
              El Usuario puede enviar un escrito a BANCLUBS, a la dirección indicada en
              el encabezado de la presente Política de Privacidad, o bien por medio de
              un correo electrónico a la dirección:
              contacto@cirqelap-cp88.wordpresstemporal.com adjuntando fotocopia de su
              documento de identidad, en cualquier momento y de manera gratuita, para:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {rights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Asimismo, podrá interponer una reclamación relativa a la protección de
              sus datos personales ante la Agencia Española de Protección de Datos en
              la dirección C/ Jorge Juan 6, 28001 – Madrid, cuando el interesado
              considere que BANCLUBS ha vulnerado los derechos que le son reconocidos
              por la normativa aplicable en protección de datos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">12. MEDIDAS DE SEGURIDAD</h2>
            <p>
              BANCLUBS tratará los datos del Usuario en todo momento de forma
              absolutamente confidencial y guardando el preceptivo deber de secreto
              respecto de los mismos, de conformidad con lo previsto en la normativa de
              aplicación, adoptando al efecto las medidas de índole técnica y
              organizativas necesarias que garanticen la seguridad de sus datos y
              eviten su alteración, pérdida, tratamiento o acceso no autorizado, habida
              cuenta del estado de la tecnología, la naturaleza de los datos almacenados
              y los riesgos a que están expuestos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">13. CAMBIOS</h2>
            <p>
              BANCLUBS se reserva el derecho de revisar su Política de Privacidad en el
              momento que lo considere oportuno, en cuyo caso se comunicará a los
              Usuarios. Por esta razón, le rogamos que compruebe de forma regular esta
              declaración de privacidad para leer la versión más reciente de la Política
              de Privacidad de BANCLUBS.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              14. ACEPTACIÓN, CONSENTIMIENTO Y ENTENDIMIENTO
            </h2>
            <p>
              El Usuario declara haber sido informado de las condiciones sobre
              protección de datos personales, aceptando y entendiendo el contenido de
              la presente Política de Privacidad. En caso contrario, por favor, no
              acepte la Política de Privacidad y/o no haga uso del Sitio Web.
            </p>
            <p>Última actualización: 08/10/2024</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">AVISOS PARA INCLUIR EN LOS FORMULARIOS</h2>
            <p>
              BANCLUBS incluirá las siguientes casillas en los formularios habilitados
              en el Sitio Web en el momento en el que el Usuario acceda y se registre
              por primera vez en ella.
            </p>
            <p>◻ He leído y acepto la Política de Privacidad.</p>
            <p>◻ Deseo recibir comunicaciones comerciales sobre servicios de BANCLUBS</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
