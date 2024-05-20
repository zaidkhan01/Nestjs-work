import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction,Request,Response } from 'express';



function globalMiddleWareOne(req:Request,res:Response,next:NextFunction){
  console.log('this is the global middle ware number1');
  next();
}




async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleWareOne);
  
  await app.listen(3000);
}
bootstrap();
