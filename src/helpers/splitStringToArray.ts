export const splitStringToArray = (text: string, separator = ","): string[] =>
  text.split(separator).map((el) => el.trim());
