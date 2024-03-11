import { Injectable } from '@nestjs/common';

export interface CatInfo {
    id: string;
    name: string;
    description: string;
  }

  @Injectable()
  export class CatsInfoService {
    private readonly cats: CatInfo[] = [
      { id: '1', name: 'Persan', description: 'Le persan est une race de chats à poil long.' },
      { id: '2', name: 'British shorthair', description: 'Le british shorthair est une race de chat originaire de Grande-Bretagne à poil court' },
      { id: '3', name: 'Siamois', description: 'Le siamois est une race de chat originaire de Thaïlande.'},
      { id: '4', name: 'Bengal', description: 'Le bengal est une race de chat hybride originaire des États-Unis.'},
      { id: '5', name: 'Maine Coon', description: 'Le Maine Coon est une race de chat à poil mi-long originaire des États-Unis.' },
      { id: '6', name: 'Ragdoll', description: 'Le Ragdoll est une race de chat caractérisée par son incroyable douceur et son poil mi-long.' },
      { id: '7', name: 'Sphynx', description: 'Le Sphynx est une race de chat connue pour son absence de poils et sa peau plissée.' },
      { id: '8', name: 'Scottish Fold', description: 'Le Scottish Fold est une race de chat connue pour ses oreilles pliées.' },
      { id: '9', name: 'Chartreux', description: 'Le Chartreux est une race de chat à poil court connu pour sa robe gris bleuté.' },
      { id: '10', name: 'Norvégien', description: 'Le Norvégien est une race de chat à poil long originaire de Norvège.' },
      { id: '11', name: 'Abyssin', description: 'L\'Abyssin est une race de chat à poil court, connu pour sa robe fauve tiquetée.' },
      { id: '12', name: 'Russe', description: 'Le Russe est une race de chat à poil court, célèbre pour sa robe bleue et ses yeux verts.' },
      { id: '13', name: 'Munchkin', description: 'Le Munchkin est connu pour ses pattes particulièrement courtes.' },
      { id: '14', name: 'Oriental', description: 'L\'Oriental est une race de chat à poil court, connu pour ses grandes oreilles et son corps élancé.' },
      { id: '15', name: 'Burmese', description: 'Le Burmese est une race de chat à poil court, originaire de Birmanie.' },
      { id: '16', name: 'Himalayen', description: 'L\'Himalayen est une race de chat à poil long, résultat d\'un croisement entre un Persan et un Siamois.' },
      { id: '17', name: 'Sibérien', description: 'Le Sibérien est une race de chat à poil long, originaire de Russie, adapté aux climats froids.' },
      { id: '18', name: 'Devon Rex', description: 'Le Devon Rex est connu pour ses poils bouclés, ses grandes oreilles et son visage elfique.' },
      { id: '19', name: 'Cornish Rex', description: 'Le Cornish Rex se distingue par sa fourrure ondulée et son corps svelte.' },
      { id: '20', name: 'Turc du lac de Van', description: 'Le Turc du lac de Van est célèbre pour son amour de l\'eau et sa robe blanche avec des marques colorées sur la tête et la queue.' },
      { id: '21', name: 'Balinais', description: 'Le Balinais est une race de chat à poil long, semblable au Siamois mais avec une fourrure plus fournie.' },
      { id: '22', name: 'Tonkinois', description: 'Le Tonkinois est un mélange entre un Siamois et un Burmese, connu pour sa nature affectueuse.' },
      { id: '23', name: 'American Shorthair', description: 'L\'American Shorthair est une race de chat robuste et saine, à poil court.' },
      { id: '24', name: 'Somali', description: 'Le Somali est une variante à poil long de l\'Abyssin, connu pour sa fourrure foisonnante.' },
      { id: '25', name: 'Selkirk Rex', description: 'Le Selkirk Rex est remarquable pour ses poils frisés, y compris sur les moustaches.' }
    ];
  
    findAll(): CatInfo[] {
      return this.cats;
    }
  
    findOne(id: string): CatInfo | undefined {
      return this.cats.find(cat => cat.id === id);
    }
  }

@Injectable()
export class UserCommentsService {
  private readonly comments: any[] = [];

  create(catId: string, text: string): any {
    const newComment = {
      catId,
      text,
    };

    this.comments.push(newComment);
    return newComment;
  }
}
