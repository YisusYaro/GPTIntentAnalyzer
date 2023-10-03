import { Sentence } from './sentence';

export interface SentenceRepository {
  save(user: Sentence): Promise<void>;
  findById(id: string): Promise<Sentence | undefined>;
}
