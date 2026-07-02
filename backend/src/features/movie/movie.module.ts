import { Module } from '@nestjs/common'
import { MovieService } from './movie.service'
import { MovieController } from './movie.controller'
import { StorageModule } from 'src/infra/storage/storage.module'

@Module({
  imports: [StorageModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
