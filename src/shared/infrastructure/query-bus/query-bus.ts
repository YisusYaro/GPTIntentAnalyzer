import { inject, injectable } from 'inversify';
import { Query } from '../../application/query';
import { QueryHandlersInformation } from './query-handlers-information';
import { TYPES } from '../dependency-injection/types';
import { Logger } from '../../domain/logger';

export interface QueryBus {
  execute(query: Query): Promise<any>;
}

@injectable()
export class QueryBusImpl implements QueryBus {
  constructor(
    @inject(TYPES.QueryHandlersInformation)
    private queryHandlersInformation: QueryHandlersInformation,
    @inject(TYPES.Logger)
    private logger: Logger,
  ) {}

  async execute(query: Query): Promise<any> {
    this.logger.info(JSON.stringify(query));
    const handler = this.queryHandlersInformation.search(query);
    const result = await handler.handle(query);
    this.logger.info(JSON.stringify(result));
    return result;
  }
}
