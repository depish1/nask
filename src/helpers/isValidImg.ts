export const isValidImg = (url: string) => {
  const img = new Image();
  img.src = url;

  return new Promise((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};
