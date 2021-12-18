export const sumValue = (data: object) =>
  Object.values(data).reduce((acc, cur) => acc + cur, 0);
