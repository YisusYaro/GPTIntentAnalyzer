import { injectable } from 'inversify';
import { Sentence, SentenceImplement, SentenceProperties } from './sentence';

export interface SentenceFactory {
  create(params: { id: string; text: string }): Sentence;
  reconstitute(properties: SentenceProperties): Sentence;
}

@injectable()
export class SentenceFactoryImpl implements SentenceFactory {
  create(params: { id: string; text: string }): Sentence {
    return new SentenceImplement({ ...params });
  }

  reconstitute(properties: SentenceProperties): Sentence {
    return new SentenceImplement(properties);
  }
}
