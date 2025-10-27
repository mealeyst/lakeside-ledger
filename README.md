# The Lakeside Ledger - Next.js Newspaper

A local news website styled like a traditional newspaper front page for Pawling, New York and surrounding areas.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom newspaper typography
- **Responsive Design** that works on desktop, tablet, and mobile
- **SEO Optimized** with proper metadata
- **Component-based Architecture** for maintainability

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
lakeside-ledger/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Newspaper header with date/price
│   ├── Masthead.tsx        # Newspaper title and tagline
│   ├── MainStory.tsx       # Featured story
│   ├── SportsStory.tsx     # Sports section
│   ├── WeatherBox.tsx      # Weather forecast
│   ├── LibraryStory.tsx    # Library news
│   ├── Classifieds.tsx     # Classified ads
│   ├── CommunityCalendar.tsx # Community events
│   ├── Obituaries.tsx      # Local obituaries
│   └── Footer.tsx          # Newspaper footer
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Styling

The project uses Tailwind CSS with custom components for newspaper styling:

- **Typography**: Playfair Display (headlines), Crimson Text (body), Libre Baskerville (bylines)
- **Layout**: Three-column newspaper layout with responsive breakpoints
- **Colors**: Traditional black text on white background
- **Components**: Custom newspaper-style components for headlines, bylines, weather, etc.

## Local Content

All content is focused on Pawling, New York and surrounding areas:

- Local government news
- High school sports
- Community events
- Local businesses
- Weather forecasts
- Classified ads
- Obituaries

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
```

## Contributing

This is a local news website template that can be customized for any community. To adapt for your area:

1. Update the location references in components
2. Replace sample content with real local news
3. Update contact information in the footer
4. Customize the color scheme if desired

## License

This project is open source and available under the MIT License.
