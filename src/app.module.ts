import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pwd',
      database: 'migrationExample',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
      logging: true,
      logger: 'file',
      // allow both start:prod and start:dev to use migrations
      migrations: ['dist/migrations/**/*.js', 'src/migrations/**/*.ts'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
