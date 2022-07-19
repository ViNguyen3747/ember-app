export class Song {
  constructor({ id, title, rating, band }, relationships = {}) {
    this.id = id;
    this.relationships = relationships;
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}
