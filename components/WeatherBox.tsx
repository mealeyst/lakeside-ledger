import { twMerge } from 'tailwind-merge';

interface WeatherData {
  current: {
    temperature: number;
    condition: string;
  };
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
  }[];
}

interface WeatherBoxProps {
  content?: WeatherData;
  className?: string;
}

export default function WeatherBox({ content, className }: WeatherBoxProps) {
  if (!content) return null;

  return (
    <div className={twMerge('weather-box', className)}>
      <h3 className='section-headline'>WEATHER</h3>
      <div className='weather-content'>
        <div className='current-weather'>
          <span className='temp'>{content.current.temperature}°F</span>
          <span className='condition'>{content.current.condition}</span>
        </div>
        <div className='forecast'>
          {content.forecast.map((day, index) => (
            <div key={index} className='forecast-day'>
              <span className='day'>{day.day}</span>
              <span className='high-low'>
                {day.high}°/{day.low}°
              </span>
              <span className='condition'>{day.condition}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
