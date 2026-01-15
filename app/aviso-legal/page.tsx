import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const prohibitedUses = [
  "usar el Sitio Web en forma alguna que pueda provocar daños, interrupciones, ineficiencias o defectos en el funcionamiento de estos o en dispositivos de terceros;",
  "usar el Sitio Web para la transmisión, instalación o publicación de cualquier virus, troyano, gusano, código malicioso u otros programas o archivos perjudiciales o con intenciones ilícitas;",
  "usar el Sitio Web para transmitir material con fines publicitarios o de promoción, incluidos spam, correos electrónicos en cadena o similares, sin la previa autorización expresa y por escrito de BANCLUBS;",
  "usar el Sitio Web de manera que constituya una vulneración cualesquiera derechos de BANCLUBS o de terceros;",
  "usar el Sitio Web para transmitir o publicar cualquier material de carácter difamatorio, ofensivo, racista, vulgar, denigrante, pornográfico, o de naturaleza obscena o amenazadora o que pueda molestar, perjudicar o meramente afectar a cualquier persona bajo el criterio de BANCLUBS;",
  "usar el Sitio Web para recoger datos de carácter personal de otros usuarios;",
  "usar el Sitio Web de forma ilegal, en contra de la buena fe, la moral y/o el orden público;",
  "acceder sin autorización a cualquier sección del Sitio Web, a otros sistemas o redes conectados a los mismos, a cualquier servidor de BANCLUBS o a los servicios ofrecidos a través del Sitio Web por medio de pirateo o falsificación, extracción de contraseñas o cualquier otro medio ilegítimo o establecido en el presente Aviso Legal;",
  "llevar a cabo alguna acción que provoque una saturación desproporcionada o innecesaria en la infraestructura del Sitio Web o en los sistemas o redes utilizados o titularidad de BANCLUBS, así como en los sistemas y redes conectados al Sitio Web."
];

const guarantees = [
  "la continuidad de los contenidos del Sitio Web;",
  "la ausencia de errores en dichos contenidos;",
  "la ausencia de virus, troyanos, gusanos y/o demás componentes maliciosos o tecnológicamente dañinos en el Sitio Web o en el servidor que los suministra;",
  "la invulnerabilidad del Sitio Web y/o la imposibilidad de vulnerar las medidas de seguridad que se adopten en los mismos;",
  "la falta de utilidad o rendimiento de los contenidos del Sitio Web;",
  "los fallos del Sitio Web ocasionados por cualquier tipo de ataque a sus servidores o a los de terceros proveedores de servicios de BANCLUBS, así como los fallos técnicos o de seguridad del sistema de cualquier de dichos proveedores que impidan el correcto funcionamiento del Sitio Web;",
  "cualquier fallo técnico, de cualquier tipo, que dificulte, retrase o impida el correcto funcionamiento del Sitio Web;",
  "los daños o perjuicios que cause, a sí mismo o a un tercero, cualquier persona que infringiera las condiciones, normas e instrucciones que BANCLUBS establece en el Sitio Web o a través de la vulneración de los sistemas de seguridad."
];

const forceMajeure = [
  "Huelgas, cierres patronales u otras medidas reivindicativas.",
  "Conmoción civil, revuelta, invasión, amenaza o ataque terrorista, guerra (declarada o no) o amenaza o preparativos de guerra.",
  "Incendio, explosión, tormenta, inundación, terremoto, hundimiento, epidemia o cualquier otro desastre natural.",
  "Imposibilidad de uso de trenes, barcos, aviones, transportes de motor u otros medios de transporte, públicos o privados.",
  "Imposibilidad de utilizar sistemas públicos o privados de telecomunicaciones.",
  "Actos, decretos, legislación, normativa o restricciones de cualquier gobierno o autoridad."
];

export default function AvisoLegalPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section hero-surface">
        <div className="container-wide space-y-4">
          <p className="eyebrow">Textos legales</p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">Aviso Legal</h1>
          <p className="text-ink/70">
            Información sobre el acceso, navegación y utilización del sitio web de
            BAnCLUBS.
          </p>
        </div>
      </section>

      <section className="section bg-white/70">
        <div className="container-wide space-y-8 text-sm text-ink/80">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">1.- IDENTIFICACIÓN</h2>
            <ul className="space-y-2">
              <li>• Titular: BANCLUBS SL. (en adelante, “BANCLUBS”)</li>
              <li>
                • Domicilio social: CALLE SOROLLA, 53 – BJ B, 28222, MAJADAHONDA,
                MADRID, ESPAÑA
              </li>
              <li>• NIF: B19918093</li>
              <li>• Contacto: contacto@cirqelap-cp88.wordpresstemporal.com</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">2.- OBJETO</h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y utilización del
              sitio web ubicado en la URL https://banclubs.com (en adelante, el “Sitio
              Web”) y por medio del cual informamos a los usuarios acerca de sus
              derechos y obligaciones en relación con los contenidos mostrados en los
              mismos, los logotipos y marcas utilizadas, así como de las
              responsabilidades que pueden derivarse de su uso.
            </p>
            <p>
              La finalidad del Sitio Web es, principalmente, la de informar a los
              clientes de BANCLUBS acerca de los productos de la sociedad.
            </p>
            <p>
              En BANCLUBS ayudamos a los clubs de business angels a construir la mejor
              experiencia de inversión posible. El acceso, navegación o utilización
              del Sitio Web implican la aceptación expresa y sin reservas de todos los
              términos del presente Aviso Legal, teniendo la misma validez y eficacia
              que cualquier contrato celebrado por escrito y firmado. Sin perjuicio
              de lo anterior, BANCLUBS se reserva el derecho a modificar la
              presentación, configuración y contenido del Sitio Web, así como el
              presente Aviso Legal por lo que se recomienda a los usuarios revisarlo
              de forma constante.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3.- DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h2>
            <p>
              BANCLUBS es titular o, en su caso, cuenta con las licencias
              correspondientes sobre los derechos de propiedad intelectual,
              industrial, de imagen o cualesquiera otros análogos sobre el Sitio Web,
              así como de todos los contenidos ofrecidos en el mismo, incluyendo, a
              título enunciativo, pero no limitativo, fotografías, ilustraciones,
              logos, marcas, grafismos, diseños, interfaces, o cualquier otra
              información o contenido incluidos en el mismo.
            </p>
            <p>
              Los usuarios únicamente disponen de un derecho de uso no exclusivo,
              dentro de un ámbito estrictamente personal y con la única finalidad de
              poder navegar por el Sitio Web de acuerdo con el presente Aviso Legal.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4.- REGLAS DE USO DEL SITIO WEB Y LA APLICACIÓN
            </h2>
            <p>
              No está permitido y, por tanto, sus consecuencias serán responsabilidad
              exclusiva de los usuarios, el acceso o la utilización del Sitio Web con
              fines ilegales o no autorizados, con o sin finalidad económica. En
              concreto, y sin carácter limitativo a la presente lista, queda
              prohibido:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {prohibitedUses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              El incumplimiento de cualquiera de las anteriores obligaciones por parte
              de los usuarios del Sitio Web podrá llevar a la adopción por parte de
              BANCLUBS de las medidas oportunas amparadas en Derecho y en el ejercicio
              de sus legítimos intereses.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">5.- RESPONSABILIDADES Y GARANTÍAS</h2>
            <p>
              BANCLUBS no puede garantizar la fiabilidad, utilidad o veracidad de
              absolutamente toda la información contenida en el Sitio Web, ni tampoco
              la utilidad o veracidad de los contenidos puestos a disposición de los
              usuarios a través de estos.
            </p>
            <p>En consecuencia, BANCLUBS no garantiza ni se hace responsable de:</p>
            <ul className="list-disc space-y-2 pl-5">
              {guarantees.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              BANCLUBS declara que ha adoptado todas las medidas necesarias, dentro de
              sus posibilidades y del estado de la técnica, para garantizar el
              funcionamiento del Sitio Web y reducir al mínimo los errores del
              sistema, tanto desde el punto de vista técnico como de los contenidos
              publicados en el Sitio Web.
            </p>
            <p>
              BANCLUBS no será responsable de la veracidad, integridad o actualización
              de las informaciones publicadas en el Sitio Web provenientes de fuentes
              ajenas a la misma, así como tampoco de las contenidas en otras
              plataformas a las que se enlace desde el Sitio Web.
            </p>
            <p>
              BANCLUBS se reserva el derecho a suspender, modificar, restringir o
              interrumpir, ya sea temporal o permanentemente, el acceso, navegación,
              uso, alojamiento y/o descarga del contenido y/o uso de servicios del
              Sitio Web, con o sin previa notificación, a los usuarios que
              contravengan cualquier de las disposiciones detalladas en el presente
              Aviso Legal, sin que medie la posibilidad de exigir indemnización por
              esta causa.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">6.- FUERZA MAYOR</h2>
            <p>
              Sin perjuicio de lo anterior, BANCLUBS no será responsable de los
              retrasos o fallos que se produjeran en el acceso, funcionamiento y
              operatividad del Sitio Web, sus Contenidos y/o Servicios, así como
              tampoco de las interrupciones, suspensiones o el mal funcionamiento de
              este, cuando tuvieran su origen en averías producidas por cualquier
              situación de fuerza mayor o causa fortuita.
            </p>
            <p>
              No seremos responsables por ningún incumplimiento o retraso en la
              realización de cualquier actuación, cuando el mismo se deba a
              acontecimientos que están fuera de nuestro control razonable (“Causa de
              Fuerza Mayor”).
            </p>
            <p>
              Las Causas de Fuerza Mayor incluirán cualquier acto, acontecimiento,
              falta de ejercicio, omisión o accidente que esté fuera de nuestro
              control razonable y entre otros, los siguientes:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {forceMajeure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Se entenderá que las mencionadas actuaciones quedarán suspendidas
              durante el período en que la Causa de Fuerza Mayor continúe, y
              dispondremos de una ampliación en el plazo para cumplir con las mismas
              por un periodo de tiempo igual al que dure la Causa de Fuerza Mayor.
              Pondremos todos los medios razonables para que finalice la Causa de
              Fuerza Mayor o para encontrar una solución que nos permita cumplir
              nuestras obligaciones a pesar de la Causa de Fuerza Mayor.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">7.- ATENCIÓN AL USUARIO</h2>
            <p>
              Los usuarios tienen su disposición el servicio de atención al usuario
              por el que BANCLUBS atenderá las consultas, quejas y sugerencias
              planteadas por ellos.
            </p>
            <p>
              Los usuarios podrán acceder al servicio de atención al cliente a través
              del siguiente e-mail de contacto:
            </p>
            <p>E-mail: contacto@cirqelap-cp88.wordpresstemporal.com</p>
            <p>
              BANCLUBS dará respuesta a las reclamaciones o consultas en el plazo más
              breve posible y, en cualquier caso, en un plazo máximo de un (1) mes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              8.- CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS
            </h2>
            <p>
              De conformidad con lo dispuesto en el REGLAMENTO (UE) 2016/679 DEL
              PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 relativo a la
              protección de las personas físicas en lo que respecta al tratamiento de
              datos personales y a la libre circulación de estos datos y por el que se
              deroga la Directiva 95/46/CE (en adelante, “RGPD”) y la Ley Orgánica
              3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía
              de los derechos digitales (en adelante, “LOPDGDD”) todos los datos de
              carácter personal facilitados durante la utilización del Sitio Web
              serán tratados de conformidad con lo dispuesto en la Política de
              Privacidad que los usuarios deben leer y, en su caso, aceptar y/o
              consentir.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">9.- CLÁUSULA DE SALVAGUARDA</h2>
            <p>
              Todas las cláusulas o extremos del presente Aviso Legal deben ser
              interpretadas de forma independiente, no viéndose afectadas el resto de
              las cláusulas en caso de que una de ellas haya sido declarada nula por
              sentencia judicial o resolución arbitral firme. Se sustituirá la
              cláusula o cláusulas afectadas por otra u otras que preserven los
              efectos perseguidos por este Aviso Legal.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              10.- LEGISLACIÓN APLICABLE Y JURISDICCIÓN
            </h2>
            <p>
              El acceso y utilización del Sitio Web se regirá e interpretará de
              conformidad con la legislación española.
            </p>
            <p>
              En el supuesto de que surja cualquier conflicto o discrepancia en la
              interpretación y/o aplicación del Aviso legal o los Términos y
              Condiciones de Compra, los Juzgados competentes serán los que disponga
              la normativa legal aplicable.
            </p>
            <p>
              Resolución de litigios en línea en materia de consumo conforme al Art.
              14.1 del Reglamento (UE) 524/2013: La Comisión Europea facilita una
              plataforma de resolución de litigios en línea que se encuentra
              disponible en el siguiente enlace:
            </p>
            <p>http://ec.europa.eu/consumers/odr/.</p>
            <p>Última actualización: 08/10/2024</p>
            <p>Copyright © BANCLUBS S.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
