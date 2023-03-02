import { Body, Controller, Delete, Get, Param, Post, Logger } from '@nestjs/common';
import { BidsService } from './bids.service';

@Controller('bids')
export class BidsController {
  createBidCount: number;
  logger: Logger;
  
  constructor(
    private readonly bidsService: BidsService) {
    this.createBidCount = 0;
    this.logger = new Logger('bids');
    }

  @Post()
  create(@Body() bid) {
    this.createBidCount++;
    this.logger.log(`${this.createBidCount}번째 입찰 등록`)
    return this.bidsService.create(bid);
  }

  @Get()
  findAll() {
    return this.bidsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bidsService.remove(+id);
  }
}
