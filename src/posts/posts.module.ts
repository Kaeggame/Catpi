import { Module, DynamicModule } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class PostsModule {
  static register(options: any): DynamicModule {
    return {
      module: PostsModule,
      imports: [ConfigModule.forRoot(options)],
      providers: [PostsService],
      controllers: [PostsController],
    };
  }
}