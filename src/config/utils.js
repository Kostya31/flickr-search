export const getUrlString = (obj) => {
  let str = '';
  for (let key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + encodeURIComponent(obj[key]);
  }
  console.log(obj);
  return str;
};
