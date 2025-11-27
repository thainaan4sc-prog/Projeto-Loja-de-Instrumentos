import Menu from "../componentes/menu";

export const metadata = {
  title: "StudioMusic",
  description: "Sistema de Gerenciamento | Loja de Instrumentos Musicais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        style={{
          backgroundImage: "url('/papeldeparede.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          fontFamily: "The Seasons",
          margin: 0,
          padding: 0,
        }}
      >
        <Menu />
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            margin: "20px auto",
            padding: "20px",
            width: "85%",
            borderRadius: "20px",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}