import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CatsModule, PostsModule.register({ isGlobal: true, ignoreEnvFile: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}

// Module static : - CatsModule
// Module dynamiqque : - PostsModule
// Middleware : - LoggerMiddleware
// Controller : - AppController / CatsController / PostsController
// Service : - AppService / CatsService / PostsService