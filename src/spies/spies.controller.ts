import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSpyDto } from './dto/create-spy.dto';
import { UpdateSpyDto } from './dto/update-spy.dto';
import { SpiesService } from './spies.service';

@Controller('spies')
export class SpiesController {
  // Inject the spy service so every method can use it
  constructor(private readonly spiesService: SpiesService) {}

  // Get All Ninjas
  @Get()
  getSpies(@Query('level') level: string): object {
    const spies = this.spiesService.getSpies({ level });

    return { spies };
  }

  // Get A Particular Ninja
  @Get(':id')
  getSpy(@Param('id', ParseIntPipe) id: number): object {
    const spy = this.spiesService.getSpy({ id });
    return spy;
  }
  // Add New Ninja
  @Post()
  createASpy(@Body(new ValidationPipe()) createSpyDto: CreateSpyDto): object {
    const spy = this.spiesService.createSpy({
      level: createSpyDto.level,
      name: createSpyDto.name,
    });
    return { spy };
  }

  // Update A Ninja
  @Put(':id')
  updateASpy(
    @Param('id') id: number,
    @Body() updateSpyDto: UpdateSpyDto,
  ): object {
    const spy = this.spiesService.updateSpy({ id: +id, updateSpyDto });
    return {
      spy,
    };
  }

  // Delete A Ninja
  @Delete(':id')
  deleteASpy(@Param('id') id: number): object {
    const spy = this.spiesService.deleteSpy({ id });
    return { spy };
  }
}
