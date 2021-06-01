const getHash = (depth) => {
  return location.hash.slice(1).toLowerCase().split('/')[depth] || '/';
};
export default getHash;
