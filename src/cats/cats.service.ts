import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats = [
    { id: 1, name: 'Whiskers', breed: 'Siamese', age: 2 },
    { id: 2, name: 'Socks', breed: 'Maine Coon', age: 4 },
    { id: 3, name: 'Fluffy', breed: 'Persian', age: 3 },
    { id: 4, name: 'Max', breed: 'Bengal', age: 5 },
    { id: 5, name: 'Luna', breed: 'Ragdoll', age: 1 },
    { id: 6, name: 'Charlie', breed: 'Scottish Fold', age: 2 },
    { id: 7, name: 'Oliver', breed: 'British Shorthair', age: 4 },
    { id: 8, name: 'Lucy', breed: 'Sphynx', age: 3 },
    { id: 9, name: 'Leo', breed: 'Norwegian Forest', age: 2 },
    { id: 10, name: 'Milo', breed: 'Siberian', age: 1 },
    { id: 11, name: 'Bella', breed: 'Birman', age: 3 },
    { id: 12, name: 'Oscar', breed: 'Tonkinese', age: 4 },
    { id: 13, name: 'Sophie', breed: 'Abyssinian', age: 2 },
    { id: 14, name: 'Tiger', breed: 'Egyptian Mau', age: 5 },
    { id: 15, name: 'Molly', breed: 'Devon Rex', age: 1 },
    { id: 16, name: 'Simba', breed: 'Himalayan', age: 3 },
    { id: 17, name: 'Chloe', breed: 'Exotic Shorthair', age: 2 },
    { id: 18, name: 'Gizmo', breed: 'Burmese', age: 4 },
    { id: 19, name: 'Lily', breed: 'Balinese', age: 3 },
    { id: 20, name: 'Rocky', breed: 'Manx', age: 2 },
    { id: 21, name: 'Coco', breed: 'Cornish Rex', age: 1 },
    { id: 22, name: 'Jack', breed: 'Turkish Van', age: 3 },
    { id: 23, name: 'Daisy', breed: 'Chartreux', age: 4 },
    { id: 24, name: 'Mia', breed: 'Ocicat', age: 2 },
    { id: 25, name: 'Shadow', breed: 'Somali', age: 5 },
    { id: 26, name: 'Loki', breed: 'Japanese Bobtail', age: 1 },
    { id: 27, name: 'Misty', breed: 'LaPerm', age: 3 },
    { id: 28, name: 'Maximus', breed: 'Pixie-Bob', age: 2 },
    { id: 29, name: 'Nala', breed: 'Singapura', age: 4 },
    { id: 30, name: 'Casper', breed: 'Toyger', age: 3 },
  ];

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }
}
