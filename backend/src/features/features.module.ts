import { Module } from '@nestjs/common'
import { MovieModule } from './movie/movie.module'
import { GenreModule } from './genre/genre.module'
import { CountryModule } from './country/country.module';

@Module({
  imports: [MovieModule, GenreModule, CountryModule],
  controllers: [],
  providers: [],
})
export class FeaturesModule {}
