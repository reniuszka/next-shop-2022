import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <p className='text-3xl font-bold text-red-500 mt-6  border-8 rounded-3xl border-pink-700'>
        eyyyy mal3xl
      </p> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
