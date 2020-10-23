import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div>
        <PostTitle>{title}</PostTitle>
        <div className="text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
