export class GaurdianNewsServiceClient {
  findNewsContent(page) {
    return fetch('https://content.guardianapis.com/search?api-key=4e4f9159-377c-4657-ad5e-542026a790a9')
      .then(response => response.json());
  }
}
