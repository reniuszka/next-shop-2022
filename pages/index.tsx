import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Rating } from '../components/Rating';
let rating = 3;
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen bg-blue-100 text-center'>
      <Header />
      {/* <main className='flex-grow max-w-md mx-auto w-full'> czesc z index</main> */}
      <Main> czescc z main</Main>
      <Rating rating={rating} />
      <Footer />
    </div>
  );
};

export default Home;
