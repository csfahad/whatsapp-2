import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp 2.0</title>
        <meta name="description" content="WhatsApp Messenger: More than 2 billion people
          in over 180 countries use WhatsApp to stay in touch with friends and
          family, anytime and anywhere. WhatsApp is free and offers simple, secure,
          reliable messaging and calling, available on phones all over the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}
