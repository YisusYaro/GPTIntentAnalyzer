import { Command } from '../command';
import { Result } from '../result';

export interface CommandHandler<
  C extends Command,
  R extends Result | undefined,
> {
  handle(command: C): Promise<R>;
}
