import { Container } from 'inversify';
import { CreateSentenceHandlerImpl } from '../../application/commands/create-sentence.handler';
import { CreateSentenceHandler } from '../../application/commands/create-sentence.interface';
import { SentenceFactory, SentenceFactoryImpl } from '../../domain/factory';
import { TYPES } from './types';
import { registerSentencesCommands } from './register-commands';
import { SentenceAnalyzer } from '../../domain/analyzer';
import { SentenceAnalyzerImpl } from '../analyzer/sentence-analyzer';

const setDomain = (container: Container): void => {
  container
    .bind<SentenceFactory>(TYPES.SentenceFactory)
    .to(SentenceFactoryImpl);
};

const setCommandsHandlers = (container: Container): void => {
  container
    .bind<CreateSentenceHandler>(TYPES.CreateSentenceHandler)
    .to(CreateSentenceHandlerImpl);
};

const setApplication = (container: Container): void => {
  setCommandsHandlers(container);
  registerSentencesCommands();
};

const setInfrastructure = (container: Container): void => {
  container
    .bind<SentenceAnalyzer>(TYPES.SentenceAnalyzer)
    .to(SentenceAnalyzerImpl);
};

export const setSentencesModule = (container: Container): void => {
  setDomain(container);
  setApplication(container);
  setInfrastructure(container);
};
