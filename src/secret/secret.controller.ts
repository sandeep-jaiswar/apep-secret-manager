import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SecretService } from './secret.service';
import { CreateSecretDto } from './dto/create-secret.dto';
import { UpdateSecretDto } from './dto/update-secret.dto';

@Controller('secret')
export class SecretController {
  constructor(private readonly secretService: SecretService) {}

  @Post()
  create(@Body() createSecretDto: CreateSecretDto) {
    return this.secretService.create(createSecretDto);
  }

  @Get()
  findAll() {
    return this.secretService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecretDto: UpdateSecretDto) {
    return this.secretService.update(+id, updateSecretDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretService.remove(+id);
  }
}
