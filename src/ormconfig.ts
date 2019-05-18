import {ConnectionOptions} from 'typeorm';

// You can load you .env file here synchronously using dotenv,
// See NestJS doc on the subject.
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pwd',
  database: 'migrationexample',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  migrations: ['dist/migrations/**/*.js', 'src/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
