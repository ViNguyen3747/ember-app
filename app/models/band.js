import { tracked } from '@glimmer/tracking';

export default class Band {
  @tracked songs;
  @tracked name;
  constructor({ id, name, songs, description }, relationships = {}) {
    this.id = id;
    this.songs = songs || [];
    this.name = name;
    this.relationships = relationships;
    this.description = description;
  }
}
