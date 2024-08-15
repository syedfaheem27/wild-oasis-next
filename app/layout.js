import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild oasis",
  description: "A hotel booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright &#169; The wild oasis</footer>
      </body>
    </html>
  );
}
