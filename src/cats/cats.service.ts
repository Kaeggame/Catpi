import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats = [
    { id: 1, name: 'Whiskers', breed: 'Siamese', age: 2 },
    { id: 2, name: 'Socks', breed: 'Maine Coon', age: 4 },
  ];

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }
}
