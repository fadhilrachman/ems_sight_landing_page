import "../styles/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07070f] font-sans antialiased">
      {children}
    </div>
  );
}
