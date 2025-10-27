import Header, { HeaderProps } from './Header';

export default function Masthead(props: HeaderProps) {
  return (
    <div className='masthead'>
      <Header date={new Date()} price='50¢' />
      <h1 className='newspaper-title'>THE LAKESIDE LEDGER</h1>
      <p className='tagline'>Serving Pawling and the Surrounding Communities Since 2025</p>
    </div>
  );
}
