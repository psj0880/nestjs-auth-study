import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { AppController } from './app.controller'

@Module({
  imports: [TerminusModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
