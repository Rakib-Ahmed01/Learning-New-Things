export const custom = (store) => (next) => (action) => {
  console.log('custom middleware');
  return next(action);
};
