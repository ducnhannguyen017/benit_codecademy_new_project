export const convertToSlug = (siteTitle) => {
  siteTitle = siteTitle.toLowerCase().split(" ").join("-");
  return siteTitle;
};
