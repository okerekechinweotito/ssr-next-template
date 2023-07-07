export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Public Header
      {children}
      Public Footer
    </section>
  );
}
