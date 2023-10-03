const DOMAIN = {
  SentenceFactory: Symbol.for('SentenceFactory'),
};

const COMMAND_HANDLERS = {
  CreateSentenceHandler: Symbol.for('CreateSentenceHandler'),
};

const APPLICATION = {
  ...COMMAND_HANDLERS,
};

const INFRASTRUCTURE = {
  SentenceAnalyzer: Symbol.for('SentenceAnalyzer'),
};

export const TYPES = {
  ...DOMAIN,
  ...APPLICATION,
  ...INFRASTRUCTURE,
};
