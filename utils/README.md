# Date Utilities

This file contains utility functions for formatting dates throughout the newspaper application.

## formatDate Function

The `formatDate` function provides flexible date formatting options for different use cases in the newspaper.

### Usage

```typescript
import { formatDate } from '@/utils/dateUtils';

// Basic usage with default newspaper format
formatDate(new Date()); // "Monday, December 16, 2024"

// Short format for calendar events
formatDate(new Date(), { format: 'short' }); // "Mon, Dec 16"

// Full format with time
formatDate(new Date(), { format: 'full', includeTime: true });
// "Monday, December 16, 2024 at 2:30 PM"

// Newspaper format with time
formatDate(new Date(), { includeTime: true });
// "Monday, December 16, 2024 at 2:30 PM"
```

### Options

- `format`: 'full' | 'short' | 'newspaper' (default: 'newspaper')
- `includeTime`: boolean (default: false)

### Format Types

- **newspaper**: "Monday, December 16, 2024" (default)
- **full**: "Monday, December 16, 2024" (same as newspaper)
- **short**: "Mon, Dec 16" (for calendar events)

### Time Formatting

When `includeTime: true` is set, the time is formatted as "2:30 PM" and appended to the date.
