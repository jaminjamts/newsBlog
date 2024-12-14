import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderSection />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
}
