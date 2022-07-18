export class Band {
  @tracked songs;
  @tracked name;
  constructor({ id, name, songs }) {
    this.id = id;
    this.songs = songs || [];
    this.name = name;
  }
}
