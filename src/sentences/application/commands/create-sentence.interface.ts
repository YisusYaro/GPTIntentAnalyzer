import { CommandHandler } from '../../../shared/application/commands/command.handler';
import { CreateSentenceCommand } from './create-sentence.command';
import { CreateSentenceResult } from './create-sentence.result';

export interface CreateSentenceHandler
  extends CommandHandler<CreateSentenceCommand, CreateSentenceResult> {
  handle(command: CreateSentenceCommand): Promise<CreateSentenceResult>;
}
