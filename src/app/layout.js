import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// database connection.
import { connectDatabase } from "@/services/mongo";

// react components.
import Header from "@/components/header/Header";

// auth provider.
import AuthProvider from "@/providers/AuthProvider";

async function RootLayout({ children }) {
  await connectDatabase();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
