import { Controller, Get } from '@nestjs/common';
import { DynamicDemoService } from './dynamic-demo.service';

@Controller('dynamic-demo')
export class DynamicDemoController {
  constructor(private readonly dynamicDemoService: DynamicDemoService) {}

  @Get()
  getConfig() {
    return { appLabel: this.dynamicDemoService.getAppLabel() };
  }
}
