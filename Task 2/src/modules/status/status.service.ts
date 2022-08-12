/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

const status = [
  {
    id: 1,
    title: 'Completed',
  },
  {
    id: 2,
    title: 'Pending',
  },
];

@Injectable()
export class StatusService {
  findAll() {
    return status;
  }
  findOne(statusId: number) {
    return status.filter((status) => status.id === statusId);
  }
  findTaskStatus(statusId: number) {
    return status.filter((status) => status.id === statusId);
  }
}
