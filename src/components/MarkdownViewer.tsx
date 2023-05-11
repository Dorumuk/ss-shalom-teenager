import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className='prose max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        img: (image) => (
          <Image
            className='w-full max-h-60 object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
