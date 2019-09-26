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
