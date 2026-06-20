export const WHY_POST_COUNT = 5;

export const WHY_POST_IMAGES = Array.from(
  { length: WHY_POST_COUNT },
  (_, index) => `/images/why/why${index + 1}.png`,
);
