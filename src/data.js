import dataSample from './data-sample';

const { data: { children: posts } } = dataSample;

export const Titles = posts.map(({ data }) => data.title);
