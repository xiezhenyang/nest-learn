import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { DynamicDemoModule } from './dynamic-demo/dynamic-demo.module';

@Module({
  imports: [
    CatsModule,
    DynamicDemoModule.forRoot({ appLabel: '独立动态模块示例' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
