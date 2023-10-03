import { getCommandHandlersMap } from '../../../shared/infrastructure/dependency-injection/register-commands';
import { CreateSentenceCommand } from '../../application/commands/create-sentence.command';
import { TYPES } from './types';

export const registerSentencesCommands = (): void => {
  const commandHandlersMap = getCommandHandlersMap();

  commandHandlersMap.set(CreateSentenceCommand, TYPES.CreateSentenceHandler);
};
