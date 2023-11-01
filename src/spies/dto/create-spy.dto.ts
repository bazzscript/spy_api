import { MinLength } from 'class-validator';

export class CreateSpyDto {
  @MinLength(2)
  name: string;
  level: string;
}
