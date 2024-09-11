export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-6xl mx-auto py-10 px-10 h-dvh flex flex-col justify-center">
      {children}
    </main>
  );
}
