import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { InfraModule } from './infra/infra.module'
import { FeaturesModule } from './features/features.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InfraModule,
    FeaturesModule,
  ],
})
export class AppModule {}
