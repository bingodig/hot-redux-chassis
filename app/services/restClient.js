// @flow

import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

// https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/ajax.md
type RequestOptions = {
  async?: boolean,
  body?: Object,
  crossDomain?: boolean,
  withCredentials?: boolean,
  headers?: Object,
  method?: 'GET'|'POST'|'PUT'|'PATCH'|'DELETE',
  user?: string,
  password?: string,
  progressObserver?: any,
  responseType?: 'json'|'text'|'blob',
  timeout?: number,
  url?: string
};

type ApiClient = (path: string, options: RequestOptions) => Observable;
type ApiClientOptions = {
  url: string
};

function createApiClient({ url }: ApiClientOptions): ApiClient {
  return function request(path, options) {
    return ajax({
      url: `${url}${path}`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      ...options
    });
  };
}

export default createApiClient({
  url: ''
});
