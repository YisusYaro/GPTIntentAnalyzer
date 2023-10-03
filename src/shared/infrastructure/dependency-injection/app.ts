import { Container } from 'inversify';
import { setSharedModule } from './shared.module';
import { setSentencesModule } from '../../../sentences/infrastructure/dependency-injection/sentences.module';

export class App {
  private static instance: App;
  private container: Container;
  private settedModules: string[];

  private constructor() {
    this.container = new Container();
    this.settedModules = [];
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

  public setSharedModule() {
    if (this.settedModules.includes(setSharedModule.name)) return;
    setSharedModule(this.container);
    this.settedModules.push(setSharedModule.name);
  }

  public setSentencesModule() {
    if (this.settedModules.includes(setSentencesModule.name)) return;
    setSentencesModule(this.container);
    this.settedModules.push(setSentencesModule.name);
  }
}
