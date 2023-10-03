import { injectable } from 'inversify';
import { SentenceAnalyzer } from '../../domain/analyzer';
import { OpenAI } from 'openai';

@injectable()
export class SentenceAnalyzerImpl implements SentenceAnalyzer {
  private openai: OpenAI;
  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    this.openai = new OpenAI({ apiKey });
  }

  async analyze(text: string): Promise<string> {
    const chatCompletion = await this.openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Please determine the intention behind the following sentence: ${text}`,
        },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 20,
    });

    return chatCompletion.choices[0].message.content ?? 'error';
  }
}
