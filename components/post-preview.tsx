import DateFormatter from './date-formatter';
import Link from 'next/link';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="font-medium text-md text-gray-700 mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
