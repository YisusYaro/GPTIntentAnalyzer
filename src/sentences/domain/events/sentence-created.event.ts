import { Event } from '../../../shared/domain/events/event';

type Properties = {
  sentence: {
    id: string;
    text: string;
    intent: string;
  };
};

export class SentenceCreatedEvent extends Event {
  static readonly EVENT_NAME = 'sentenceCreated';
  readonly sentence: {
    id: string;
    text: string;
    intent: string;
  };

  constructor(properties: Properties) {
    super(SentenceCreatedEvent.EVENT_NAME, properties.sentence.id);
    Object.assign(this, properties);
  }

  toProperties() {
    const { sentence } = this;
    return { sentence };
  }
}
