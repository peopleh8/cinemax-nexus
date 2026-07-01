import { DocumentBuilder } from '@nestjs/swagger'

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Cinemax API')
    .setDescription('API documentation for Cinemax')
    .setVersion('1.0.0')
    .setBasePath('/api')
    .addCookieAuth()
    .build()
}
