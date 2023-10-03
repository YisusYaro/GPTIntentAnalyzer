import { Command } from '../../../shared/application/command';

class Properties {
  readonly id: string;
  readonly text: string;
}

export class CreateSentenceCommand extends Properties implements Command {
  constructor(properties: Properties) {
    super();
    Object.assign(this, properties);
  }
}
