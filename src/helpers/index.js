export const composeParams = params => {
  console.log({ params });
  const urlParams = Object.keys(params).map(item => `${params[item]}`);

  return urlParams.join('&');
};
