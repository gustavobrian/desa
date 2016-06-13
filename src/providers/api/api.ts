import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ApiLaravel
{
  private _apiUrl = 'http://localhost:8000/api/courses';
  private _headers = new Headers;
  constructor(private _http: Http)
  {
    this._headers.append("Content-type", "application/x-www-form-urlencoded");
    this._headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  getAll()
  {
    return new Promise((resolve, reject) => {
      this._http.get(this._apiUrl).subscribe(
        res => {
          resolve(res.json());
        },
        error => {
          reject(error);
        }
      )
    })
  }

  find(id)
  {
    return new Promise((resolve, reject) => {
      this._http.get(this._apiUrl + "/" + id).subscribe(
        res => {
          resolve(res.json());
        },
        error => {
          reject(error);
        }
      )
    })
  }

  create(course)
  {
    return new Promise((resolve, reject) => {
      this._http.post(
        this._apiUrl,
        course, {
          headers: this._headers
        }
      ).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    })
  }

  update(course, id)
  {
    return new Promise((resolve, reject) => {
      this._http.put(
        this._apiUrl + "/" + id,
        course, {
          headers: this._headers
        }
      ).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    })
  }

  delete(id)
  {
        return new Promise((resolve, reject) => {
            this._http.delete(this._apiUrl + "/" + id).subscribe(
                res => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
            )
        })
    }
}
