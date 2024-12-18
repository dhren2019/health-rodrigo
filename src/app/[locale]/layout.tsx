import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider';
import type { Metadata } from 'next';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import { Inter, Rubik, Space_Grotesk } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Header } from './components/Header';
import Head from 'next/head'; // Importa Head
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik',
});
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Next Temp',
  description: 'create next app By Yahya Parvar!',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${space_grotesk.variable} ${rubik.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <Head>
        {/* GTranslate Settings */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "native_language_names": true,
                "languages": ["en", "fr", "de", "it", "es", "ar"],
                "wrapper_selector": ".gtranslate_wrapper",
                "switcher_horizontal_position": "right"
              };
            `,
          }}
        ></script>
        <script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          defer
        ></script>
      </Head>
      <body>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={[
            'light',
            'dark',
            'instagram',
            'facebook',
            'discord',
            'netflix',
            'twilight',
            'reddit',
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              color="var(--primary)"
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className="mx-auto max-w-screen-2xl">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* GTranslate Wrapper */}
        <div className="gtranslate_wrapper"></div>
      </body>
    </html>
  );
}
