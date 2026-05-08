export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="AI-powered activity monitoring, KPI management, and smart attendance for sharper productivity, stronger security, and smarter insights."
      />
      <meta property="og:title" content="EMS+ | Monitor. Align. Attend." />
      <meta
        property="og:description"
        content="AI-powered activity monitoring, KPI management, and smart attendance for sharper productivity, stronger security, and smarter insights."
      />
      <meta property="og:url" content="https://emsight.id/" />
      <link rel="icon" type="image/svg+xml" href="/emsplus-mark.svg" />
      {/* Font Awesome 5 — same CDN used by emsight.id for fas fa-sun / fa-moon toggle */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {/* Anti-FOUC: apply dark class BEFORE React hydrates — prevents body gradient flash */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var saved = localStorage.getItem('darkMode');
          if (saved === 'true') {
            document.documentElement.classList.add('dark');
          }
        })();
      `}} />
      <title>EMS+ | Monitor. Align. Attend.</title>
    </>
  );
}
