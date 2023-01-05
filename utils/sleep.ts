export const sleep = (time: number) => {
  return new Promise((res) => setTimeout(() => res(1), time));
};
