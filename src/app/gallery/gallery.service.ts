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
