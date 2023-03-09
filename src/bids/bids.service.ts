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

  async findBySize(size) {
    const result = await this.bidRepository
    .createQueryBuilder('bid')
    .select()
    .where('bid.bidSize = :size', { size: size})
    .getMany();
    return result;
  }

  async findByRange(sizeFrom, sizeTo) {
    const result = await this.bidRepository
      .createQueryBuilder('bid')
      .select()
      .where('bid.bidSize > :sizeFrom', { sizeFrom: sizeFrom })
      .andWhere('bid.bidSize < :sizeTo', { sizeTo: sizeTo })
      .orderBy('bid.bidSize', 'ASC')
      .take(100)
      .getMany()
    return result;
  }

  remove(bidId: number) {
    return this.bidRepository.delete({ bidId }); 
  } 
}
