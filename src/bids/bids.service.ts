import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BidEntity } from './entities/bid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BidsService {
  constructor(@InjectRepository(BidEntity) private readonly bidRepository: Repository<BidEntity>) { }

  create(bid) {
    this.bidRepository.save(bid);
  }

  findAll() {
    return this.bidRepository.find({
      relations: {
        raffle: true,
        user: true
      }
    });
  }

      // const result = await this.raffleRepository.find({
    //   where: { isClosed: false },
    //   relations: {
    //     product: true,
    //     bid: true,
    //     user: true,
    //   },
    // });

  remove(bidId: number) {
    return this.bidRepository.delete({ bidId }); 
  } 
}
