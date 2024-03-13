import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`LOG SRV - START REQUEST`);
    console.log(`LOG SRV - REQUEST DATE : ${new Date().toLocaleString()}`);
    console.log(`LOG SRV - REQUEST STATUS : ${req.res.statusCode} - REQUESTER IP : ${req.ip}`);
    console.log(`LOG SRV - REQUEST METHOD : ${req.method} - REQUEST URL : ${req.originalUrl}`);
    console.log(`LOG SRV - REQUEST BODY : ${JSON.stringify(req.body)}`);
    console.log(`LOG SRV - END REQUEST`);
    console.log(``);
    next();
  }
}
