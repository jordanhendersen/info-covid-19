//TODO: refractor the code
export const getPercentageChange = (todayData, yesterdayData) => {
  const decreasedValue = todayData - yesterdayData;
  const percentage = Math.round((decreasedValue / yesterdayData) * 100);
  let output = '';

  if (percentage > 0) {
    output = `${percentage}% Increase`;
  } else if (percentage < 0) {
    output = `${percentage}% Decrease`;
  } else {
    output = `${percentage}% Increase`;
  }

  return output;
};

export const getChipBackground = (todayData, yesterdayData, label) => {
  const decreasedValue = todayData - yesterdayData;
  const percentage = Math.round((decreasedValue / yesterdayData) * 100);
  let output = '';

  if (percentage > 0 && label === 'total recoveries') {
    output = {
      backgroundColor: '#1bb99a',
      color: '#fff',
      fontWeight: 600,
    };
  } else if (percentage > 0) {
    output = {
      backgroundColor: '#d9534f',
      color: '#fff',
      fontWeight: 600,
    };
  } else if (percentage < 0) {
    output = {
      backgroundColor: '#1bb99a',
      color: '#fff',
      fontWeight: 600,
    };
  } else {
    output = {
      backgroundColor: '#1976d2',
      color: '#fff',
      fontWeight: 600,
    };
  }

  return output;
};

export const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};
