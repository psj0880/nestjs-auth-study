import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService } from '@nestjs/terminus'

@Controller()
export class AppController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get('ping')
  @HealthCheck()
  healthCheck() {
    return this.healthCheckService.check([])
  }
}
