import { AggregateRoot } from '../../shared/domain/aggregate-root';

export type SentenceEssentialProperties = Required<{
  readonly id: string;
  readonly text: string;
}>;

export type SentenceOptionalProperties = Partial<{
  readonly intent: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}>;

export type SentenceProperties = SentenceEssentialProperties &
  Required<SentenceOptionalProperties>;

export interface Sentence {
  toProperties(): SentenceProperties;
  setIntent(intent: string): void;
  commit(): Promise<void>;
}

export class SentenceImplement extends AggregateRoot implements Sentence {
  private readonly id: string;
  private text: string;
  private intent = 'pending';
  private readonly createdAt: string = new Date().toISOString();
  private updatedAt: string = new Date().toISOString();

  constructor(
    properties: SentenceEssentialProperties & SentenceOptionalProperties,
  ) {
    super();
    Object.assign(this, properties);
  }

  toProperties(): SentenceProperties {
    return {
      id: this.id,
      text: this.text,
      intent: this.intent,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  setIntent(intent: string): void {
    this.intent = intent;
  }
}
