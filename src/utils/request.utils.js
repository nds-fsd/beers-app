const PATH = 'https://api.punkapi.com/v2';

export const request = ({
    url,
    body,
    method = 'GET',
    params,
    onSuccess = () => {},
    onError = () => {},
}) => {
  let parsedUrl = `${PATH}${url}`;
  if (params) {
    parsedUrl = `${parsedUrl}&${params}`;
  }
  fetch(parsedUrl, {
    method,
    body,
  })
  .then(async response => {
    const data = await response.json();

    // check for error response
    if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    onSuccess(data);
  })
  .catch(error => {
    console.error('There was an error!', error);
    onError(error);
  });
};
