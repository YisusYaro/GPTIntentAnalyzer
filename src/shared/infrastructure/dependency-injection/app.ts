import { Container } from 'inversify';
import { setSharedModule } from './shared.module';
import { setSentencesModule } from '../../../sentences/infrastructure/dependency-injection/sentences.module';

export class App {
  private static instance: App;
  private container: Container;

  private constructor() {
    this.container = new Container();
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  public getContainer(): Container {
    return this.container;
  }

  public setDependencyInjectionApp() {
    setSharedModule(this.container);
    setSentencesModule(this.container);
  }
}
