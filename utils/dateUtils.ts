export interface DateFormatOptions {
  includeTime?: boolean;
  format?: 'full' | 'short' | 'newspaper';
}

export function formatDate(date: Date, options: DateFormatOptions = {}): string {
  const { includeTime = false, format = 'newspaper' } = options;

  const baseOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (includeTime) {
    baseOptions.hour = 'numeric';
    baseOptions.minute = '2-digit';
    baseOptions.hour12 = true;
  }

  if (format === 'short') {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  if (format === 'full') {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...(includeTime && {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
    });
  }

  // Default 'newspaper' format
  return date.toLocaleDateString('en-US', baseOptions);
}
