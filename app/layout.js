import './globals.css';

export const metadata = {
  title: 'Bogotá Unlocked | Private All-Inclusive Day Tour',
  description: 'Experience the real Bogotá in one worry-free day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
