import Story from '@/components/Story';
import WeatherBox from '@/components/WeatherBox';
import Classifieds from '@/components/Classifieds';
import CommunityCalendar from '@/components/CommunityCalendar';
import Obituaries from '@/components/Obituaries';
import Opinion from '@/components/Opinion';

export type RendererProps = {
  elements: {
    type: string;
    id: string;
    content: any;
    className?: string;
  }[];
};

export default function Renderer({ elements }: RendererProps) {
  const renderMap = {
    story: Story,
    weather: WeatherBox,
    classifieds: Classifieds,
    communityCalendar: CommunityCalendar,
    obituaries: Obituaries,
    opinion: Opinion,
  };

  return (
    <>
      {elements.map((element, index) => {
        const Component = renderMap[element.type as keyof typeof renderMap];
        if (!Component) {
          return null;
        }
        return <Component key={element.id} {...element} />;
      })}
    </>
  );
}
