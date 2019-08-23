export function groupByMonth(weights) {
  const byMonth = weights.reduce((byMonth, weight) => {
    const date = new Date(weight.time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthLabel = `0${month}`.slice(0, 2);
    const label = `${year}_${monthLabel}`;

    if (!byMonth[label]) {
      byMonth[label] = {
        year,
        month,
        weights: [],
      };
    }
    byMonth[label].weights = [...byMonth[label].weights, weight];
    return byMonth;
  }, {});

  return Object.values(byMonth);
}

export function computeAverages(months) {
  return months.map((month) => {
    const sum = month.weights.reduce((sum, weight) => sum + parseFloat(weight.weight, 10), 0);
    const count = month.weights.length;
    const average = sum / count;
    return {
      ...month,
      count,
      average,
    };
  });
}

export function computeStdDevs(months) {
  return months.map((month) => {
    const diffs = month.weights.map((weight) => parseFloat(weight.weight, 10) - month.average);
    const diffsSum = diffs.reduce((sum, diff) => sum + (diff * diff), 0);
    const stdDev = Math.sqrt(diffsSum / month.count);
    return {
      year: month.year,
      month: month.month,
      count: month.count,
      average: month.average,
      stdDev,
    };
  });
}
