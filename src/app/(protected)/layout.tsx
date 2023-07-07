export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Protected Header
      {children}
      Protected Footer
    </section>
  );
}
