import React from 'react';

export interface DateContextData {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: (startDate: Date | null, endDate: Date | null) => void;
}

export const dateContextDefaultValue: DateContextData = {
  startDate: new Date(JSON.parse(localStorage.getItem('startDate') as string) || (Date.now() - 7 * 24 * 60 * 60 * 1000)),
  endDate: new Date(JSON.parse(localStorage.getItem('endDate') as string) || (Date.now())),
  setDateRange: () => {}
}

export const DateContext = React.createContext<DateContextData>(dateContextDefaultValue);

export function useDateContextValue(): DateContextData {
  const [[startDate, endDate], setDates]
    = React.useState<(Date|null)[]>([
        dateContextDefaultValue.startDate,
        dateContextDefaultValue.endDate
      ]);
  
  const setDateRange = (startDate: Date | null, endDate: Date | null) => {
    setDates([startDate, endDate]); 
    startDate && localStorage.setItem('startDate', `${startDate.getTime()}`);
    endDate && localStorage.setItem('endDate', `${endDate.getTime()}`);
  };

  return {
    startDate,
    endDate,
    setDateRange
  }
}
