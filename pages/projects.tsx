import Container from '../components/container';
import Layout from '../components/layout';
import PostTitle from '../components/post-title';
import Head from 'next/head';


const Projects = () => {
  return (
    <Layout>
      <Container>
          <article className="mb-32">
            <Head>
              <title>Projects</title>
            </Head>
            <PostTitle>Projects</PostTitle>
            <div>Under Construction</div>
          </article>
      </Container>
    </Layout>
  );
};

export default Projects;

