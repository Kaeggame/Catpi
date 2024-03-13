import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      'Cats Controller': {
        'Get all cats': {
          method: 'GET',
          url: '/cats',
          description: 'Retourne tous les chats disponibles dans le tableau cats.',
        },
        'Get a cat by ID': {
          method: 'GET',
          url: '/cats/:id',
          description: 'Remplacez :id par l\'ID réel du chat que vous souhaitez récupérer.',
        },
      },
      'Posts Controller': {
        'Get all posts': {
          method: 'GET',
          url: '/posts',
          description: 'Retourne tous les posts disponibles dans le tableau posts.',
        },
        'Get a post by ID': {
          method: 'GET',
          url: '/posts/:id',
          description: 'Remplacez :id par l\'ID réel du post que vous souhaitez récupérer.',
        },
        'Create a new post': {
          method: 'POST',
          url: '/posts',
          description: 'Permet de créer un nouveau post. Le corps de la requête doit inclure les détails du post (auteur, titre et contenu).',
        },
      },
    };
  }
}
