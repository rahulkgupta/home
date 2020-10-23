import Link from 'next/link';

const Intro = () => {
  return (
    <section className="flex flex-row mb-8 mt-4">
      <h4 className="text-center text-lg">
        <Link href="/">
          <a className="hover:underline">Thoughts</a>
        </Link>
      </h4>
      <h4 className="text-center text-lg pl-6">
      <Link href="/projects">
          <a className="hover:underline">Projects</a>
        </Link>
      </h4>
      <h4 className="text-center text-lg pl-6">
      <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </h4>
    </section>
  );
};

export default Intro;
