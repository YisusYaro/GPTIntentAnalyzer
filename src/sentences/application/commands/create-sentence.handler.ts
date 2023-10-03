import { inject, injectable } from 'inversify';
import { SentenceAnalyzer } from '../../domain/analyzer';
import { SentenceFactory } from '../../domain/factory';
import { TYPES } from '../../infrastructure/dependency-injection/types';
import { CreateSentenceCommand } from './create-sentence.command';
import { CreateSentenceHandler } from './create-sentence.interface';
import { CreateSentenceResult } from './create-sentence.result';

@injectable()
export class CreateSentenceHandlerImpl implements CreateSentenceHandler {
  constructor(
    @inject(TYPES.SentenceFactory)
    private sentenceFactory: SentenceFactory,
    @inject(TYPES.SentenceAnalyzer)
    private sentenceAnalyzer: SentenceAnalyzer,
  ) {}

  async handle(command: CreateSentenceCommand): Promise<CreateSentenceResult> {
    const sentence = this.sentenceFactory.create({
      id: command.id,
      text: command.text,
    });

    const intent = await this.sentenceAnalyzer.analyze(
      sentence.toProperties().text,
    );

    sentence.setIntent(intent);

    await sentence.commit();

    return new CreateSentenceResult({ intent });
  }
}
