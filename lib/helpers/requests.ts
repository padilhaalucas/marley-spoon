export default async function fetcher(
  url: string,
) {
  const networkResponse = await fetch(url);

  if (networkResponse.ok) {
    const data = await networkResponse.json();
    return { data };
  } else {
    throw new Error(`Request failed: ${url}`);
  }
  
}
