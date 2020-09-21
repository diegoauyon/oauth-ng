'use strict';

var storageService = angular.module('oauth.storage', []);

storageService.factory('Storage', [function(){

  var service = {
    storage: window.sessionStorage // By default
  };

  /**
   * Deletes the item from storage,
   * Returns the item's previous value
   */
  service.delete = function (name) {
    var stored = this.get(name);
    this.storage.removeItem(name);
    return stored;
  };

  /**
   * Returns the item from storage
   */
  service.get = function (name) {
    return this.storage.getItem(name);
  };

  /**
   * Sets the item in storage to the value specified
   * Returns the item's value
   */
  service.set = function (name, value) {
    this.storage.setItem(name, value);
    return this.get(name);
  };

  /**
   * Change the storage service being used
   */
  service.use = function (storage) {
    if (storage === 'sessionStorage') {
      this.storage = window.sessionStorage;
    } else if (storage === 'localStorage') {
      this.storage = window.localStorage;
    }
  };

  return service;
}]);
