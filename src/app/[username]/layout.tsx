export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-screen justify-center bg-gray-800">
      {children}
    </div>
  );
}
