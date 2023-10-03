import { inject, injectable } from 'inversify';
import { Command } from '../../application/command';
import { CommandHandlersInformation } from './command-handlers-information';
import { TYPES } from '../dependency-injection/types';
import { Result } from '../../application/result';
import { Logger } from '../../domain/logger';

export interface CommandBus {
  execute(command: Command): Promise<Result | undefined>;
}

@injectable()
export class CommandBusImpl implements CommandBus {
  constructor(
    @inject(TYPES.CommandHandlersInformation)
    private commandHandlersInformation: CommandHandlersInformation,
    @inject(TYPES.Logger)
    private logger: Logger,
  ) {}

  async execute(command: Command): Promise<Result | undefined> {
    this.logger.info(JSON.stringify(command));
    const handler = this.commandHandlersInformation.search(command);
    const result = await handler.handle(command);
    this.logger.info(JSON.stringify(result));
    return result;
  }
}
