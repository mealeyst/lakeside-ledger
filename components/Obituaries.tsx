import { twMerge } from 'tailwind-merge';

interface Obituary {
  id: string;
  deceasedName: string;
  age: number;
  description: string;
}

interface ObituariesProps {
  content?: Obituary[];
  className?: string;
}
export default function Obituaries({ className, content }: ObituariesProps) {
  if (!content || !content?.length) return null;

  return (
    <article className={twMerge('story', className)}>
      <h3 className='story-headline'>Local Obituaries</h3>
      {content.map(obituary => (
        <div key={obituary.id} className='obituary'>
          <strong>{obituary.deceasedName}</strong>, {obituary.age}, {obituary.description}
        </div>
      ))}
    </article>
  );
}
