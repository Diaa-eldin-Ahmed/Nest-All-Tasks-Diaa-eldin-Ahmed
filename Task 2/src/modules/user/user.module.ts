/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskModule } from '../task/task.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TaskModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
