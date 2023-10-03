export interface SentenceAnalyzer {
  analyze(text: string): Promise<string>;
}
