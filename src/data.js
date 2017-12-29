// import dataSample from './data-sample';
// export const _postsData = _filterData(dataSample);

let _filterData = data => {
  let { data: { children: posts } } = data;
  return posts.map(({ data: { title, id, permalink } }) => {
    return {
      id,
      title,
      permalink,
    };
  });
};

export const fetchData = address => {
  return new Promise((res, rej) => {
    var request = new XMLHttpRequest();
    request.open('GET', address, true);

    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          let data = _filterData(JSON.parse(this.responseText));
          // console.log(data);
          res(data);
        } else {
          // Error :(
          rej([]);
          console.log('REJECTED!');
        }
      }
    };

    request.send();
    request = null;

    // setTimeout(() => {
    //   res({ posts: _postsData });
    // }, 1000);
  });
};
