import LandingPageHeaderComponent from "@/components/landing-page/header.component";
import LandingPageFooterComponent from "@/components/landing-page/footer.component";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LandingPageHeaderComponent />
      {children}
      <LandingPageFooterComponent />
    </div>
  );
}
