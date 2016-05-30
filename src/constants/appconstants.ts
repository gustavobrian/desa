import {provide, Provider} from '@angular/core';
export class ViewConstantApp {
  private _constantView: string = 'Constante de vista';
  get constantView(): string
  {
    return this._constantView;
  }
}

export class ConfigConstantsApp {
  private _constantConfig: string = 'Constante de la configuración de la app';
  private _url: string = 'http://localhost:8888/laravel/public/angular2login';

  get constantConfig(): string
  {
    return this._constantConfig;
  }

  get url(): string
  {
    return this._url;
  }

}
export const CONSTANTS_PROVIDER: Provider[] = [
  provide(ConfigConstantsApp, { useClass: ConfigConstantsApp }),
  provide(ViewConstantApp, { useClass: ViewConstantApp })
];
