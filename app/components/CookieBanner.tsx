\"use client\";

import { useEffect, useState } from \"react\";

const STORAGE_KEY = \"banclubs_cookie_consent\";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleClose = (accepted: boolean) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ accepted, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className=\"fixed bottom-6 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2 rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft backdrop-blur\">
      <div className=\"flex flex-col gap-3 md:flex-row md:items-center md:justify-between\">
        <p className=\"text-xs text-ink/70\">
          Utilizamos cookies para ofrecerte la mejor experiencia en nuestra web.
          Puedes aprender más en la Política de Cookies.
        </p>
        <div className=\"flex gap-2\">
          <button
            className=\"rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold text-ink\"
            type=\"button\"
            onClick={() => handleClose(false)}
          >
            Cerrar
          </button>
          <button
            className=\"rounded-full bg-ink px-4 py-2 text-xs font-semibold text-sand\"
            type=\"button\"
            onClick={() => handleClose(true)}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
