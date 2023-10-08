import 'reflect-metadata';
import { Container } from 'inversify';
import {
  cleanUpMetadata,
  InversifyExpressServer,
} from 'inversify-express-utils';
import request from 'supertest';
import { App } from '../../../src/shared/infrastructure/dependency-injection/app';
import { buildExpressApp } from '../../helpers/build-express-app';
import '../../../src/sentences/interface/sentences.controller';

describe('Create sentence', () => {
  let app: any;
  let container: Container;

  beforeAll(async () => {
    App.getInstance().setSharedModule();
    App.getInstance().setSentencesModule();
    container = App.getInstance().getContainer();
    const server = new InversifyExpressServer(container);
    app = buildExpressApp(server);
  });

  beforeEach(async () => {
    container.snapshot();
    cleanUpMetadata();
  });

  afterEach(() => container.restore());

  describe('execute', () => {
    it('should return successful http status', async () => {
      const result = await request(app).post(`/sentences`).send({
        id: '01HBVJJFMPT5GG7071ED3ANJFC',
        text: 'Deseo tener más información de su producto',
      });

      expect(result.status).toBe(201);
    }, 10000);
  });
});
