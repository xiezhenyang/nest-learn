import { DynamicModule, Module } from '@nestjs/common';
import { DynamicDemoController } from './dynamic-demo.controller';
import { DynamicDemoService } from './dynamic-demo.service';
import { DYNAMIC_DEMO_OPTIONS } from './dynamic-demo.constants';
import type { DynamicDemoOptions } from './interfaces/dynamic-demo-options.interface';

/**
 * 独立动态模块示例（与 Cats 功能无关）。
 * 在 AppModule 中：`DynamicDemoModule.forRoot({ appLabel: '...' })`
 */
@Module({})
export class DynamicDemoModule {
  static forRoot(options: DynamicDemoOptions = {}): DynamicModule {
    return {
      module: DynamicDemoModule,
      controllers: [DynamicDemoController],
      providers: [
        { provide: DYNAMIC_DEMO_OPTIONS, useValue: options },
        DynamicDemoService,
      ],
    };
  }
}
