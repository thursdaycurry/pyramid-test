import { Injectable } from '@nestjs/common';
import { CreateRaffleDto } from './dto/create-raffle.dto';
import { UpdateRaffleDto } from './dto/update-raffle.dto';
import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RafflesService {
  constructor(
    @InjectRepository(RaffleEntity) private readonly raffleRepository: Repository<RaffleEntity>,
  ) {}

  create(raffle) {
    console.log(`raffle create: ${JSON.stringify(raffle)}`);
    return this.raffleRepository.save(raffle);
  }

  // 래플 리스트 전체 조회
  async findAll() {
    // const result = await this.raffleRepository.find({
    //   where: { isClosed: false },
    //   relations: {
    //     product: true,
    //     bid: true,
    //     user: true,
    //   },
    // });
    // const count = result.length;
    // return { count: count, data: result };

    // const result = await this.raffleRepository.find({
    //   take: 10,
    //   order: {
    //     dateEnd: 'DESC'
    //   },
    //   relations: {
    //     product: true,
    //     bid: true,
    //     user: true
    //   }
    // });
    // const count = result.length;
    // return { count: count, data: result };

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.isClosed = :boolean', { boolean: 0})
    //   .leftJoinAndSelect('raffle.product', 'product')
    //   .leftJoinAndSelect('raffle.bid', 'bid')
    //   .leftJoinAndSelect('raffle.user', 'user')
    //   .take(10)
    //   .getMany();

    const result = await this.raffleRepository
      .createQueryBuilder('raffle')
      .leftJoinAndSelect('raffle.product', 'product')
      .leftJoinAndSelect('raffle.bid', 'bid')
      .select([
        'raffle.raffleId',
        'product.productImage',
        'product.productColor',
        'product.productModel',
        'product.productName',
        'product.releasePrice',
        'raffle.dateEnd',
        'bid.bidId'
      ])
      .orderBy('raffle.dateEnd', 'DESC')
      .addOrderBy('raffle.raffleId', 'DESC')
      .take(10)
      .getMany();

    return result;
  }

  async test() {
    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.raffleId = :id', { id: 100 })
    //   .getOne()
    
    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.raffleId = :id OR raffle.productId = :productId', { id: 100, productId: 200 })
    //   .getMany()
    // return result;

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.productId = :productId', { productId: 200000 })
    //   .getOneOrFail()
    // return result;

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.isClosed = :boolean', { boolean: true })
    //   .getRawOne();
    
    //  const result = await this.raffleRepository
    //       .createQueryBuilder('raffle')
    //       .where('raffle.dateStart IN (:...dateStart)', { dateStart: ['2022-01-12', '2022-02-12']})
    //       .getRawMany();
        
    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.dateStart IN (:...dateStart)', { dateStart: ['2022-01-12', '2022-02-12'] })
    //   .andWhere('raffle.closedPrice = :price', { price: 1711032 })
    //   .getRawMany()
    
    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .distinctOn(['raffle.productId']).orderBy('raffle.productId')
    //   .getMany();

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .groupBy('raffle.createdAt').addGroupBy('raffle.updatedAt').addGroupBy('raffle.deletedAt')
    //   .getMany();

    // const result = await this.raffleRepository.
    //   createQueryBuilder('raffle').limit(10).getMany();

    // const result = await this.raffleRepository.
    //   createQueryBuilder('raffle').offset(10500).getMany();

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .leftJoinAndSelect('raffle.product', 'product')
    //   .limit(10)
    // .getMany()

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .leftJoinAndSelect('raffle.product', 'product')
    //   .where('product.productSize = :size', { size: 260})
    //   .limit(10)
    // .getMany()

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .innerJoinAndSelect(
    //     'raffle.product', 'product',
    //     'product.productColor = :color', { color: 'Indigo'}
    // )
    //   .where('raffle.closedPrice > :price', { price: 400000})
    //   .limit(10)
    // .getMany()

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .innerJoin('raffle.product', 'product')
    //   .where('product.productSize > :size', {size: 280})
    //   .getMany();

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .select('raffle.closedPrice')
    //   .where('raffle.closedPrice > :price', { price: 300000 })
    //   .getMany()

    // const result = await this.raffleRepository
    // .createQueryBuilder('raffle')
    // .select("SUM(raffle.closedPrice)", "sum")
    // .where('raffle.closedPrice > :price', { price: 300000 })
    // .getRawOne()

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .select('raffle.dateEnd')
    //   .addSelect('SUM(raffle.closedPrice)', 'sum')
    //   .groupBy('raffle.dateEnd')
    //   .getRawMany();

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .leftJoinAndSelect('raffle.product', 'product')
    //   .skip(10)
    //   .getMany()

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .select(['raffle.raffleId', 'raffle.isClosed', 'raffle.closedPrice'])
    //   .getMany()
    
    const result = await this.raffleRepository
      .createQueryBuilder('raffle')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('raffle.raffleId')
          .where('raffle.closedPrice > :price', { price: 200000 })
          .getQuery()
        return 'raffle.raffleId IN ' + subQuery
      })
    .getMany()
    
    return result;

  }
  

  // 특정 상품 상세 조회
  async findOne(id: number) {
    const currentRaffle = await this.raffleRepository.findOne({
      where: { raffleId: id },
      relations: {
        product: true,
        bid: true,
      },
    });
    const {
      product: { productId },
    } = currentRaffle;

    // 래플들 모두 가져오는데, 조건은 해당 래플이 현재 래플에서 참조하는 productID와 같은 경우
    const previousRaffle = await this.raffleRepository.find({
      where: {
        product: {
          productId: productId,
        },
      },
    });

    const result = {
      data: currentRaffle,
      raffleHistory: previousRaffle,
    };
    return result;
  }

  // 특정 상품 삭제
  async remove(raffleId: number) {
    await this.raffleRepository.delete({ raffleId });
  }

  // update(id: number, updateRaffleDto: UpdateRaffleDto) {
  //   return `This action updates a #${id} raffle`;
  // }
}
