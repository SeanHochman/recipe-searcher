export const composeParams = params => {
  const urlParams = Object.keys(params).map(item => `${params[item]}`);

  return urlParams.join('&');
};
