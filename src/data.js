import dataSample from './data-sample';

const { data: { children: posts } } = dataSample;

export const postsData = posts.map(({ data }) => data.title);
