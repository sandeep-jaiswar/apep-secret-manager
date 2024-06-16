import { Module } from '@nestjs/common';
import { SecretService } from './secret.service';
import { SecretController } from './secret.controller';

@Module({
  controllers: [SecretController],
  providers: [SecretService],
})
export class SecretModule {}
