import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TodosModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: "src/schema.gql",
      driver: ApolloDriver,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
