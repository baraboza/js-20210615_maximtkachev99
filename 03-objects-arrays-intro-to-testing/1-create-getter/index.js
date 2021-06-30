/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArr = path.split('.');
  let index = 0;

  const getter = function (obj) {
    const tmp = obj[pathArr[index]];
    if (index === pathArr.length - 1 || tmp === undefined) {
      return tmp;
    } else {
      index++;
      return getter(tmp);
    }
  };

  return getter;
}
