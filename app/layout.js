import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { theme } from "@/Providers/ThemeProviderSELF";
import { ThemeProvider } from "@mui/material";

const supabase = createClient(
  "https://uwixomogyvygqonywfqz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3aXhvbW9neXZ5Z3Fvbnl3ZnF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MTgzNjQsImV4cCI6MjAxNTk5NDM2NH0.hAb1Q6wiv4JbAPLprFAeopOa3-Eizf9w8Hasg7JCmvo"
);

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}