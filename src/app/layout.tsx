import type { Metadata } from 'next';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.min.css';

export const metadata: Metadata = {
  title: 'Cardápio Online com Whatsapp',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
