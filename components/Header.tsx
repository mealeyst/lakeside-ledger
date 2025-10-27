import { formatDate } from '@/utils/dateUtils';

export interface HeaderProps {
  date?: Date;
  price?: string;
}

export default function Header({ date = new Date(), price = '50¢' }: HeaderProps) {
  return (
    <header className='newspaper-header'>
      <div className='header-info'>
        <span className='date'>{formatDate(date, { format: 'full' })}</span>
        <span className='price'>{price}</span>
      </div>
    </header>
  );
}
