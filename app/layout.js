export const metadata = {
  title: 'Bogotá Unlocked | Private All-Inclusive Day Tour',
  description: 'Experience the real Bogotá in one worry-free day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-neutral-900 text-neutral-100">{children}</body>
    </html>
  );
}
