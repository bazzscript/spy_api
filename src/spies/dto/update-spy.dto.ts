import { PartialType } from '@nestjs/mapped-types';
import { CreateSpyDto } from './create-spy.dto';

export class UpdateSpyDto extends PartialType(CreateSpyDto) {}
