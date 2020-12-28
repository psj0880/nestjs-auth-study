import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())

  if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'stg') {
    const options = new DocumentBuilder()
      .setTitle('NestJS Boilerplate')
      .setVersion(process.env.npm_package_version)
      .setDescription('')
      .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('docs', app, document)
  }

  await app.listen(3000)
}

bootstrap()
