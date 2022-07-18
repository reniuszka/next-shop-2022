import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

const UserPage = () => {
  return (
    <div className='flex flex-col min-h-screen bg-blue-100 text-center'>
      <Header />
      <Main> o userze</Main>
      <Footer />
    </div>
  );
};

export default UserPage;
