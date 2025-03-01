export default function VagasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto max-w-[1536px]">{children}</div>
    </div>
  );
}
