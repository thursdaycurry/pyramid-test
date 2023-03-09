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
    this.logger.log('findAll is triggered');
    return this.bidsService.findAll();
  }
  
  @Get(':size')
  async findBySize(@Param('size') size) {
    this.logger.log('size logger is triggered');
    return await this.bidsService.findBySize(size);
  }

  @Get('range/:sizeFrom/:sizeTo')
  async findByRange(@Param('sizeFrom') sizeFrom, @Param('sizeTo') sizeTo) {
    this.logger.log('findByRange logger is triggered');
    return await this.bidsService.findByRange(sizeFrom, sizeTo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bidsService.remove(+id);
  }
}
