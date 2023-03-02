import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BidEntity } from './entities/bid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BidsService {
  constructor(@InjectRepository(BidEntity) private readonly bidRepository: Repository<BidEntity>) { }

  async create(bid) {
    await this.bidRepository.save(bid);
  }

  // findAll Raw
  findAll() {
    return this.bidRepository.find({
      relations: {
        raffle: true,
        user: true
      }
    });
  }

  remove(bidId: number) {
    return this.bidRepository.delete({ bidId }); 
  } 
}
