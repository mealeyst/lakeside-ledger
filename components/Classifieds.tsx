import { twMerge } from 'tailwind-merge';

interface Ad {
  id: string;
  category: string;
  description: string;
  contact?: string | null;
}

interface ClassifiedsProps {
  content?: Ad[];
  className?: string;
}

export default function Classifieds({ className, content }: ClassifiedsProps) {
  if (!content || !content?.length) return null;
  return (
    <div className={twMerge('classifieds', className)}>
      <h3 className='section-headline'>CLASSIFIED ADS</h3>
      {content.map(ad => (
        <div key={ad.id} className='ad'>
          <strong>{ad.category}:</strong> {ad.description}
          {ad.contact && ` ${ad.contact}`}
        </div>
      ))}
    </div>
  );
}
