import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import { resolve } from 'node:path'
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.use(cookieParser())

  app.enableCors({
    origin: process.env.CORS_ORIGINS?.split(',').map((origin) => origin.trim()),
    credentials: true,
  })

  app.useStaticAssets(resolve(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )

  app.setGlobalPrefix('api')

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
