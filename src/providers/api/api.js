"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ApiLaravel = (function () {
    function ApiLaravel(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/courses';
        this._headers = new http_1.Headers;
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }
    ApiLaravel.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this._apiUrl).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiLaravel.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this._apiUrl + "/" + id).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiLaravel.prototype.create = function (course) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this._apiUrl, course, {
                headers: _this._headers
            }).subscribe(function (res) {
                resolve(res);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiLaravel.prototype.update = function (course, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.put(_this._apiUrl + "/" + id, course, {
                headers: _this._headers
            }).subscribe(function (res) {
                resolve(res);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiLaravel.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.delete(_this._apiUrl + "/" + id).subscribe(function (res) {
                resolve(res);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiLaravel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiLaravel);
    return ApiLaravel;
}());
exports.ApiLaravel = ApiLaravel;
//# sourceMappingURL=api.js.map