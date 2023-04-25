export default async function getData(url) {
  let data = null;
  let error = null;
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    error = err;
  }
  return { data, error };
}
