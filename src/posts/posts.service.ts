import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  timestamp: Date;
}

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];
  private nextId = 1;

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  create(post: Omit<Post, 'id' | 'timestamp'>) {
    const newPost = {
      id: this.nextId++,
      timestamp: new Date(),
      ...post,
    };
    this.posts.push(newPost);
    return newPost;
  }
}
