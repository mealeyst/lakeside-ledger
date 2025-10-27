import { formatDate } from '@/utils/dateUtils';
import { twMerge } from 'tailwind-merge';

interface Event {
  id: string;
  date: Date;
  eventName: string;
  description?: string;
  location?: string | null;
}

interface CommunityCalendarProps {
  content?: Event[];
  className?: string;
}

export default function CommunityCalendar({ className, content }: CommunityCalendarProps) {
  if (!content || !content?.length) return null;

  return (
    <article className={twMerge('story', className)}>
      <h3 className='story-headline'>Community Calendar</h3>
      {content.map(event => (
        <div key={event.id} className='calendar-item'>
          <strong>{formatDate(new Date(event.date), { format: 'short' })}:</strong>{' '}
          {event.eventName}
          {event.description && `, ${event.description}`}
          {event.location && `, ${event.location}`}
        </div>
      ))}
    </article>
  );
}
