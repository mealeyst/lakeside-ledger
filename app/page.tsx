import Masthead from '@/components/Masthead';
import Footer from '@/components/Footer';
import newspaperData from '@/data/12_16_2024.json';
import Renderer, { RendererProps } from '../components/Renderer';

export default function Home() {
  return (
    <div className='newspaper-container'>
      <Masthead date={new Date(newspaperData.masthead.date)} price={newspaperData.masthead.price} />
      <Renderer elements={newspaperData.sections} />
      <Footer />
    </div>
  );
}
