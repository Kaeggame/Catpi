import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService, Post as PostInterface } from './posts.service';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post()
  create(@Body() post: Omit<PostInterface, 'id' | 'timestamp'>) {
    return this.postsService.create(post);
  }
}

