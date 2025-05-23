import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@ionic/react/css/core.css";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";

const inter = Poppins({ subsets: ["latin"], weight: ["800","900","300","400","500","600","700" ] });

export const metadata: Metadata = {
  title: "Junior Dev",
  description: "Portfolio de Junior Asosa Devellopeur Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className = {`${inter.className} bg-background`}  >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
