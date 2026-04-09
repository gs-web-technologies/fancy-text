import "./globals.css";
import "../../public/css/variables.css";
import "../../public/css/common.css";
import "../../public/css/main.css";
import "../../public/css/translator73c6.css";
import Header from "@/components/frontend/Header";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full`}
    >
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
