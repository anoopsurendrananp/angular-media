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
