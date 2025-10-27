import { twMerge } from 'tailwind-merge';

export type OpinionProps = {
  content?: {
    id: string;
    writerName: string;
    title: string;
    article: string;
    columnSpan?: 1 | 2 | 3; // Number of columns to span
  };
  className?: string;
};

export default function Opinion({ className, content }: OpinionProps) {
  if (!content) return null;

  return (
    <article className={twMerge('story', className)}>
      <h3 className='story-headline'>{content.title}</h3>
      <div className='byline'>By {content.writerName}</div>
      <div className='opinion-content'>
        {content.article.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
