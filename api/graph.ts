import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl2x3ev4a2aah01z5317r5b2x/master"
);

export const getFeatured = async () => {
  const { featureds } = await graphcms.request(
    `{
        featureds(stage: PUBLISHED) {
          paintings {
            id,
            title,
            slug,
            year,
            technique,
            size,
            category { title, slug },
            images { id, url },
            previewImage { id, url }
          }
        }
      }`
  );

  return featureds[0].paintings;
};

export const getSearchingData = async (data: string) => {
  const { paintings } = await graphcms.request(
    `{
      paintings(stage: PUBLISHED, where: { title_contains: "${data}"}) {
        id,
        title,
        previewImage { url },
        category { title, slug },
        slug
      }
    }`
  );

  return paintings;
};

export const getCategories = async () => {
  const { categories } = await graphcms.request(
    `{
      categories(stage: PUBLISHED) {
        id,
        title,
        slug
      }
    }`
  );

  return categories;
};

export const getCategoryData = async (data: string) => {
  const { paintings } = await graphcms.request(
    `{
      paintings(stage: PUBLISHED, where: { category: { slug: "${data}"}}) {
        id,
        title,
        previewImage { url },
        category { title, slug },
        slug
      }
    }`
  );

  return paintings;
};

export const getWorksSlugs = async () => {
  const { paintings } = await graphcms.request(
    `{
      paintings(stage: PUBLISHED) {
        id,
        slug,
        category { title, slug }
      }
    }`
  );

  return paintings;
};

export const getDataBySlug = async (data: string) => {
  const { paintings } = await graphcms.request(
    `{
      paintings(stage: PUBLISHED, where: { slug: "${data}"}) {
        id,
        title,
        slug,
        year,
        technique,
        size,
        category { title, slug },
        images { id, url },
        previewImage { id, url }
      }
    }`
  );

  return paintings[0];
};
