import { Module } from '@nestjs/common'
import { MovieModule } from './movie/movie.module'
import { GenreModule } from './genre/genre.module'
import { CountryModule } from './country/country.module'
import { PersonModule } from './person/person.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MovieModule, GenreModule, CountryModule, PersonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class FeaturesModule {}
