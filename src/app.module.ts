import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpiesModule } from './spies/spies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SpiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
