import { Result } from '../../../shared/application/result';

export class CreateSentenceResult implements Result {
  constructor(properties: { intent: string }) {
    Object.assign(this, properties);
  }
}
