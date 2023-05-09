import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftDto } from './create-soft.dto';

export class UpdateSoftDto extends PartialType(CreateSoftDto) {}
