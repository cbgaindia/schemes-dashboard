export function sortList(list) {
  list.sort((a, b) => {
    const first = Number(a.split('-')[0]);
    const second = Number(b.split('-')[0]);

    if (first > second) return -1;
    if (first < second) return 1;
    return 0;
  });
  return list;
}

// Truncate String
export function Truncate(str, length) {
  if (str.length <= length) return str;
  return `${str.substring(0, length)} ...`;
}

// Debounce Function
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
