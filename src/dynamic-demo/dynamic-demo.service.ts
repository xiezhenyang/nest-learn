import { Inject, Injectable } from '@nestjs/common';
import { DYNAMIC_DEMO_OPTIONS } from './dynamic-demo.constants';
import type { DynamicDemoOptions } from './interfaces/dynamic-demo-options.interface';

@Injectable()
export class DynamicDemoService {
  constructor(
    @Inject(DYNAMIC_DEMO_OPTIONS)
    private readonly options: DynamicDemoOptions,
  ) {}

  getAppLabel(): string {
    return this.options.appLabel ?? 'dynamic-demo';
  }
}
