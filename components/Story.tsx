import { twMerge } from 'tailwind-merge';

interface StoryProps {
  className?: string;
  content: {
    byline: string;
    content: string;
    headline: string;
    isMainStory?: boolean;
  };
}

export default function Story({
  content: { byline, content, headline, isMainStory = false },
  className,
}: StoryProps) {
  const containerClass = isMainStory ? 'main-story' : 'story';
  const headlineClass = isMainStory ? 'headline' : 'story-headline';
  console.log(className);

  return (
    <article className={twMerge(containerClass, className)}>
      <h2 className={headlineClass}>{headline}</h2>
      <div className='byline'>{byline}</div>
      <div className={'story-content'}>
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
