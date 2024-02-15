export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  newArray.forEach((_, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  });
  return newArray;
};
