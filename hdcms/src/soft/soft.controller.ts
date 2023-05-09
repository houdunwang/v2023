import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { SoftService } from './soft.service'
import { CreateSoftDto } from './dto/create-soft.dto'
import { UpdateSoftDto } from './dto/update-soft.dto'

@Controller('soft')
export class SoftController {
  constructor(private readonly softService: SoftService) {}

  @Post()
  create(@Body() createSoftDto: CreateSoftDto) {
    return this.softService.create(createSoftDto)
  }

  @Get()
  findAll() {
    return this.softService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoftDto: UpdateSoftDto) {
    return this.softService.update(+id, updateSoftDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softService.remove(+id)
  }
}
