import { Module } from '@nestjs/common';
import { CatsInfoService} from './cats-info.service';
import { CatsController } from 'src/cats/cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsInfoService],
})

export class CatsInfoModule {}
