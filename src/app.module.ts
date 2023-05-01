import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { UserModule } from './apis/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { SmsModule } from './apis/sms/sms.module';
import { PointModule } from './apis/point/point.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SmsModule,
    PointModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.SQL_HOST,
        port: parseInt(process.env.SQL_PORT, 10),
        username: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        entities: [__dirname + '/apis/**/*.entity.*'],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class AppModule {}
