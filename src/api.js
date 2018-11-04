const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";
const BASE_URL = `${API_URL}/search`;

const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has("content-type") &&
      res.headers.get("content-type").startsWith("application/json")
    ) {
      // It's a nice JSON error returned by us, so decode it
      return res.json().then(err => Promise.reject(err));
    }
    // It's a less informative error returned by express
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};

const sendContent = content =>
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json());

export default sendContent;
