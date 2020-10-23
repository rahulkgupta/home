import Footer from './footer';
import Meta from './meta';
import Intro from '../components/intro';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen container mx-auto px-5 max-w-4xl">
        <Intro />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
