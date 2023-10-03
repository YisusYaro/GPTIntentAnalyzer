import * as express from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  interfaces,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import { CommandBus } from '../../shared/infrastructure/command-bus/command-bus';
import { TYPES as SHARED_TYPES } from '../../shared/infrastructure/dependency-injection/types';
import { CreateSentenceCommand } from '../application/commands/create-sentence.command';

@controller('/sentences')
export class FooController implements interfaces.Controller {
  constructor(
    @inject(SHARED_TYPES.CommandBus)
    private commandBus: CommandBus,
  ) {}

  @httpPost('/')
  async createSentence(
    @requestParam('id') id: string,
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    const command = new CreateSentenceCommand({
      id,
      ...req.body,
    });
    const result = await this.commandBus.execute(command);
    res.status(201).send(result);
  }
}
