import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { User } from '@prisma/client'
import { Admin } from 'src/auth/admin.decorator'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { CreateSoftDto } from './dto/create-soft.dto'
import { UpdateSoftDto } from './dto/update-soft.dto'
import { SoftService } from './soft.service'

@Controller('soft')
export class SoftController {
  constructor(private readonly softService: SoftService) {}

  @Post()
  @Admin()
  create(@Body() createSoftDto: CreateSoftDto, @CurrentUser() user: User) {
    return this.softService.create(createSoftDto, user)
  }

  @Get()
  findAll(@Query('page') page: number) {
    return this.softService.findAll(+page)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softService.findOne(+id)
  }

  @Patch(':id')
  @Admin()
  update(@Param('id') id: string, @Body() updateSoftDto: UpdateSoftDto) {
    return this.softService.update(+id, updateSoftDto)
  }

  @Delete(':id')
  @Admin()
  remove(@Param('id') id: string) {
    return this.softService.remove(+id)
  }
}
