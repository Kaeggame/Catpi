import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsInfoModule } from './cats-info/cats-info.module';
import { LoggerMiddleware } from './logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsInfoModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Switch pour les routes
  }
}
