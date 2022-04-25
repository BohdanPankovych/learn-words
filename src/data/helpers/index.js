
export const valsWithPrefix = (prefix) => (obj) => Object.entries(obj).reduce((prev, [curK, curV]) => ({
  ...prev,
  [curK]: prefix + curV
}), {});

export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
})

export const isIE11OrBelow = () => {
  const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  const msie = ua.indexOf('MSIE '); // IE 10 or older
  const trident = ua.indexOf('Trident/'); //IE 11

  return (msie > 0 || trident > 0);
}

export const isLocalhost = () => location.hostname === 'localhost' || location.hostname === '127.0.0.1';

export const redirectToHttps = () => {
  const isIP = location.hostname.toLowerCase() === location.hostname.toUpperCase();
  const isHttp = location.protocol === 'http:';

  if (!isLocalhost() && !isIP)
    if (isHttp)
      location.href = 'https:' + location.href.substring(location.protocol.length);
}



