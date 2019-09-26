import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  fruits: any = [
    {
      id: 1,
      name: 'Apple',
      scientificName: 'Malus domestica',
      description: 'Apples come in all shades of reds, greens, and yellows.',
      imageUrl: 'assets/images/fruits/apples.jpg'
    },
    {
      id: 2,
      name: 'Apricot',
      scientificName: 'Prunus armeniaca',
      description: '',
      imageUrl: 'assets/images/fruits/apricots.jpg'
    },
    {
      id: 3,
      name: 'Avocado',
      scientificName: 'Persea americana',
      description: '',
      imageUrl: 'assets/images/fruits/avocados.jpg'
    },
    {
      id: 4,
      name: 'Banana',
      scientificName: 'Musa acuminata',
      description: '',
      imageUrl: 'assets/images/fruits/bananas.jpg'
    },
    {
      id: 5,
      name: 'Bing Cherry',
      scientificName: 'Prunus avium',
      description: '',
      imageUrl: 'assets/images/fruits/bing-cherries.jpg'
    },
    {
      id: 6,
      name: 'Blackberry',
      scientificName: 'Rubus fruticosus',
      description: '',
      imageUrl: 'assets/images/fruits/blackberries.jpg'
    },
    {
      id: 7,
      name: 'Blueberry',
      scientificName: 'Cyanococcus vaccinium',
      description: '',
      imageUrl: 'assets/images/fruits/blueberries.jpg'
    },
    {
      id: 8,
      name: 'Cherry',
      scientificName: 'Prunus avium',
      description: '',
      imageUrl: 'assets/images/fruits/cherries.jpg'
    },
    {
      id: 9,
      name: 'Custard Apple',
      scientificName: 'Annona reticulata',
      description: '',
      imageUrl: 'assets/images/fruits/custard-apple.jpg'
    },
    {
      id: 10,
      name: 'Dates',
      scientificName: 'Phoenix dactylifera',
      description: '',
      imageUrl: 'assets/images/fruits/dates.jpg'
    },
    {
      id: 11,
      name: 'Dragon Fruit',
      scientificName: 'Hylocereus undatus',
      description: '',
      imageUrl: 'assets/images/fruits/dragonfruit.jpg'
    },
    {
      id: 12,
      name: 'Egg Fruit',
      scientificName: 'Pouteria campechiana',
      description: '',
      imageUrl: 'assets/images/fruits/egg-fruits.jpg'
    },
    {
      id: 13,
      name: 'Fig',
      scientificName: 'Ficus caica',
      description: '',
      imageUrl: 'assets/images/fruits/figs.jpg'
    },
    {
      id: 14,
      name: 'Gooseberry',
      scientificName: 'Ribes uva-crispa',
      description: '',
      imageUrl: 'assets/images/fruits/gooseberry.jpg'
    },
    {
      id: 15,
      name: 'Grapes',
      scientificName: 'Vitis vinifera',
      description: '',
      imageUrl: 'assets/images/fruits/grapes.jpg'
    },
    {
      id: 16,
      name: 'Grape Fruit',
      scientificName: 'Citrus × paradisi',
      description: '',
      imageUrl: 'assets/images/fruits/grapefruit.jpg'
    },
    {
      id: 17,
      name: 'Guava',
      scientificName: 'Psidium guajava',
      description: '',
      imageUrl: 'assets/images/fruits/guavas.jpg'
    },
    {
      id: 18,
      name: 'Jack Fruit',
      scientificName: 'Artocarpus heterophyllus',
      description: '',
      imageUrl: 'assets/images/fruits/jackfruit.png'
    },
    {
      id: 19,
      name: 'Jamba',
      scientificName: 'Syzygium samarangense',
      description: '',
      imageUrl: 'assets/images/fruits/jamba.jpg'
    },
    {
      id: 20,
      name: 'Jamun',
      scientificName: 'Syzygium cumini',
      description: '',
      imageUrl: 'assets/images/fruits/jamun.jpg'
    },
    {
      id: 21,
      name: 'Jujube',
      scientificName: 'Syzygium samarangense',
      description: '',
      imageUrl: 'assets/images/fruits/jujube.jpg'
    },
    {
      id: 22,
      name: 'Kiwi',
      scientificName: 'Actinidia deliciosa',
      description: '',
      imageUrl: 'assets/images/fruits/kiwi.jpg'
    },
    {
      id: 23,
      name: 'Lemon',
      scientificName: 'Citrus × limon',
      description: '',
      imageUrl: 'assets/images/fruits/lemons.jpg'
    },
    {
      id: 24,
      name: 'Longan Fruit',
      scientificName: 'Dimocarpus longan',
      description: '',
      imageUrl: 'assets/images/fruits/longanfruit.jpg'
    },
    {
      id: 25,
      name: 'Lychee',
      scientificName: 'Litchi chinensis',
      description: '',
      imageUrl: 'assets/images/fruits/lychee.jpg'
    },
    {
      id: 26,
      name: 'Mango',
      scientificName: 'Mangifera indica',
      description: '',
      imageUrl: 'assets/images/fruits/mangoes.jpg'
    },
    {
      id: 27,
      name: 'Mangosteen',
      scientificName: 'Garcinia mangostana',
      description: '',
      imageUrl: 'assets/images/fruits/mangosteen.jpg'
    },
    {
      id: 28,
      name: 'Mosambi',
      scientificName: 'Citrus limetta',
      description: '',
      imageUrl: 'assets/images/fruits/mosambi.jpg'
    },
    {
      id: 29,
      name: 'Mulberry',
      scientificName: 'Morus nigra',
      description: '',
      imageUrl: 'assets/images/fruits/mulberries.jpg'
    },
    {
      id: 30,
      name: 'Olive',
      scientificName: 'Olea europaea',
      description: '',
      imageUrl: 'assets/images/fruits/olives.jpg'
    },
    {
      id: 31,
      name: 'Orange',
      scientificName: 'Citrus X sinensis',
      description: '',
      imageUrl: 'assets/images/fruits/oranges.jpg'
    },
    {
      id: 32,
      name: 'Papaya',
      scientificName: 'Carica papaya',
      description: '',
      imageUrl: 'assets/images/fruits/papaya.jpg'
    },
    {
      id: 33,
      name: 'Passion Fruit',
      scientificName: 'Passiflora edulis',
      description: '',
      imageUrl: 'assets/images/fruits/passionfruit.jpg'
    },
    {
      id: 34,
      name: 'Peach',
      scientificName: 'Prunus persica',
      description: '',
      imageUrl: 'assets/images/fruits/peach.jpg'
    },
    {
      id: 35,
      name: 'Pear',
      scientificName: 'Pyrus communis',
      description: '',
      imageUrl: 'assets/images/fruits/pears.jpg'
    },
    {
      id: 36,
      name: 'Pineapple',
      scientificName: 'Ananas comosus',
      description: '',
      imageUrl: 'assets/images/fruits/pineapples.jpg'
    },
    {
      id: 37,
      name: 'Plum',
      scientificName: 'Prunus subg. Prunus',
      description: '',
      imageUrl: 'assets/images/fruits/plums.jpg'
    },
    {
      id: 38,
      name: 'Pomegranate',
      scientificName: 'Punica granatum',
      description: '',
      imageUrl: 'assets/images/fruits/pomegranates.jpg'
    },
    {
      id: 39,
      name: 'Pomelo',
      scientificName: 'Citrus maxima',
      description: 'The largest citrus fruit from the family Rutaceae.',
      imageUrl: 'assets/images/fruits/pomelo.jpg'
    },
    {
      id: 40,
      name: 'Rambutan',
      scientificName: 'Nephelium lappaceum',
      description: '',
      imageUrl: 'assets/images/fruits/rambutan.jpg'
    },
    {
      id: 41,
      name: 'Raspberry',
      scientificName: 'Rubus idaeus',
      description: '',
      imageUrl: 'assets/images/fruits/raspberries.jpg'
    },
    {
      id: 42,
      name: 'Sapota',
      scientificName: 'Manilkara zapota',
      description: '',
      imageUrl: 'assets/images/fruits/sapota.jpg'
    },
    {
      id: 43,
      name: 'Shamam',
      scientificName: 'Cucumis melo',
      description: '',
      imageUrl: 'assets/images/fruits/shamam.jpg'
    },
    {
      id: 44,
      name: 'Star Fruit',
      scientificName: 'Averrhoa carambola',
      description: '',
      imageUrl: 'assets/images/fruits/starfruit.jpg'
    },
    {
      id: 45,
      name: 'Strawberry',
      scientificName: 'Fragaria × ananassa',
      description: '',
      imageUrl: 'assets/images/fruits/strawberries.jpg'
    },
    {
      id: 46,
      name: 'Watermelon',
      scientificName: 'Citrullus lanatus',
      description: '',
      imageUrl: 'assets/images/fruits/watermelon.jpg'
    }
  ];

  constructor() { }

  getFruits(index: number, limit: number) {
    let content = this.fruits.slice(index * limit, (index + 1) * limit);
    const response = {
      status: true,
      data: {
        items: content,
        total: this.fruits.length
      }
    };
    return response;
  }

}
