import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BookModule,UsersModule],
  controllers: [],
  providers: [],
  exports:[],
})
export class RootModule {
  constructor(){
    console.log('App Module');
  }
}
