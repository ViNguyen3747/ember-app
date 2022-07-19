import { tracked } from '@glimmer/tracking';

export class Band {
  @tracked songs;
  @tracked name;
  constructor({ id, name, songs }, relationships = {}) {
    this.id = id;
    this.songs = songs || [];
    this.name = name;
    this.relationships = relationships;
  }
}
