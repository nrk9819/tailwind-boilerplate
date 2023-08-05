const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = px => `${round(px / 10)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  round,
  rem,
  em,
};
