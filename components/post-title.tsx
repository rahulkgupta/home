import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className="text-4xl font-bold mb-12">{children}</h1>;
};

export default PostTitle;
