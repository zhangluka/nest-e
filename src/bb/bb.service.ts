import { Injectable } from '@nestjs/common';

@Injectable()
export class BbService {
  hd() {
    return 'hd service';
  }
}
