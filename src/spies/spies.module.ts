import { Module } from '@nestjs/common';
import { SpiesController } from './spies.controller';
import { SpiesService } from './spies.service';

@Module({
  controllers: [SpiesController],
  providers: [SpiesService],
})
export class SpiesModule {}
