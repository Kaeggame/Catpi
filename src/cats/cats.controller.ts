import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsInfoService } from 'src/cats-info/cats-info.service';

@Controller('cats')
export class CatsController {
    constructor(private catsInfoService: CatsInfoService) {}
  
    @Get()
    getAllCatsInfo() {
      return this.catsInfoService.findAll();
    }
  }
