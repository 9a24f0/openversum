export function load({ params,url }) {
    let filterId = url.searchParams.get('filter_id');
  return { filterId };
}