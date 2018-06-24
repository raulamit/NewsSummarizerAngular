export class GaurdianNewsServiceClient {
  findNewsContent(page, query) {
    let filter = ''
    if (page) {
      filter += `&page=${page}`;
    }
    if (query) {
      filter += `&q=${query}`;
    }
    return fetch(`https://content.guardianapis.com/search?api-key=4e4f9159-377c-4657-ad5e-542026a790a9${filter}`)
      .then(response => response.json());
  }

  findNewsTags(query) {
    return fetch(`https://content.guardianapis.com/tags?q=${query}&api-key=4e4f9159-377c-4657-ad5e-542026a790a9`)
      .then(response => response.json());
  }
}
