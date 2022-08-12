import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi there, Check out my Task Management System using Nest JS 😉';
  }
}
