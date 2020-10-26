import Container from '../components/container';
import PostBody from '../components/post-body';
import Layout from '../components/layout';
import PostTitle from '../components/post-title';
import Head from 'next/head';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


type Props = {
  content: string;
};


const About = ({ content }: Props) => {
  return (
    <Layout>
      <Container>
          <article className="mb-32">
            <Head>
              <title>About</title>
            </Head>
            <PostTitle>About</PostTitle>
            <PostBody content={content} />
          </article>
      </Container>
    </Layout>
  );
};

export default About;


export async function getStaticProps() {
  const fullPath = join(join(process.cwd(), '_content'), `about.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  console.log(content)

  const hmtlContent = await markdownToHtml(content || '');

  return {
    props: {
      content: hmtlContent,
    }
  };
}
