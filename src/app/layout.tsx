import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import '../css/main.css';
import '../css/fontawesome.css';
import { PrimeReactProvider } from 'primereact/api';
import ToastContextProvider from '@/context/AppToastContext';

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
      <body>
        <PrimeReactProvider>
          <ToastContextProvider>{children}</ToastContextProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
