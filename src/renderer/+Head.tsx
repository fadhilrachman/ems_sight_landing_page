export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>EMSight | Monitor. Align. Attend.</title>
      <meta name="description" content="AI-powered activity monitoring, KPI management, and smart attendance for sharper productivity, stronger security, and smarter insights." />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content="Employee Monitoring System, EMS, EMSight, AI monitoring, KPI, OKR, smart attendance, geo attendance, geofencing, productivity analytics, ARNA Technology" />
      <meta name="author" content="ARNA Technology" />
      <meta name="theme-color" content="#0a0a0f" />

      <link rel="canonical" href="https://emsight.id/" />
      <link rel="icon" type="image/svg+xml" href="https://arnatech.ap-south-1.linodeobjects.com/public%2Femsplus-mark.svg" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="EMSight | Monitor. Align. Attend." />
      <meta property="og:description" content="AI-powered activity monitoring, KPI management, and smart attendance for sharper productivity, stronger security, and smarter insights." />
      <meta property="og:url" content="https://emsight.id/" />
      <meta property="og:site_name" content="ARNA Technology" />
      <meta property="og:image" content="https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-2.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EMSight | Monitor. Align. Attend." />
      <meta name="twitter:description" content="AI-powered activity monitoring, KPI management, and smart attendance for sharper productivity, stronger security, and smarter insights." />
      <meta name="twitter:image" content="https://arnatech.ap-south-1.linodeobjects.com/public%2Fems-dashboard-2.png" />

      {/* Font Awesome 6.4.0 — same version as emsight.id reference */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var saved = localStorage.getItem('darkMode');
          var isDark;
          if (saved !== null) {
            isDark = saved === 'true';
          } else {
            isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            localStorage.setItem('darkMode', isDark ? 'true' : 'false');
          }
          if (isDark) {
            document.documentElement.classList.add('dark');
          }
        })();
      `}} />
    </>
  );
}
