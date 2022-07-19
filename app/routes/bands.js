import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsRoute extends Route {
  @service catalog;
  // model() {
  //   let song1 = new Song({
  //     title: 'first song',
  //     rating: 3,
  //   });
  //   let song2 = new Song({
  //     title: 'second song',
  //     rating: 4,
  //   });
  //   let song3 = new Song({
  //     title: 'third song',
  //     rating: 2,
  //   });
  //   let song4 = new Song({
  //     title: 'fourth song',
  //     rating: 5,
  //   });
  //   let firstBand = new Band({
  //     id: 'first-band',
  //     name: 'First Band',
  //     songs: [song1],
  //   });
  //   let secondBand = new Band({
  //     id: 'second-band',
  //     name: 'Second Band',
  //     songs: [song2, song4],
  //   });
  //   let thirdBand = new Band({
  //     id: 'third-band',
  //     name: 'Third Band',
  //     songs: [song3],
  //   });
  //   song1.band = firstBand;
  //   song2.band = secondBand;
  //   song3.band = thirdBand;
  //   song4.band = secondBand;

  //   this.catalog.add('song', song1);
  //   this.catalog.add('song', song2);
  //   this.catalog.add('song', song3);
  //   this.catalog.add('song', song4);

  //   this.catalog.add('band', firstBand);
  //   this.catalog.add('band', secondBand);
  //   this.catalog.add('band', thirdBand);
  //   return this.catalog.bands;
  // }
  model() {
    return this.catalog.fetchAll('bands');
  }
}
