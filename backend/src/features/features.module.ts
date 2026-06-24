import { Module } from '@nestjs/common'
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [MovieModule, GenreModule],
  controllers: [],
  providers: [],
})
export class FeaturesModule {}
