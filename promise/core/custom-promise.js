class CustomPromise {
  /**
   * @param {Function} callback
   */
  constructor(callback) {
    this._success = [];
    this._error = [];
    this._status = 'pending';

    if (callback) {
      this._callback = callback;

      setTimeout(() => {
        this._callback(this._resolve.bind(this), this._reject.bind(this));
      }, 0);
    };
  }

  /**
   * @param {Function} successCallback
   * @param {Function} rejectCallback
   * @return {CustomPromise}
   */
  then(successCallback, rejectCallback) {
    if (successCallback) {
      this._success.push(successCallback);
    };

    if (rejectCallback) {
      this._error.push(rejectCallback);
    };

    if (this._status === 'fulfilled') {
      this._success.forEach(cb => cb(this));
      this._success = [];

      return this;
    };

    if (this._status === 'rejected') {
      this._error.forEach(cb => cb(this));
      this._error = [];

      return this;
    };
  }

  /**
   * @param {Function} rejectCallback
   * @return {CustomPromise}
   */
  catch(rejectCallback) {
    return this.then(null, rejectCallback);
  }

  _resolve(value) {
    this._success.forEach(cb => cb(value));
    this._status = 'fulfilled';
    this._success = [];
  }

  _reject(value) {
    this._error.forEach(cb => cb(value));
    this._status = 'rejected';
    this._error = [];
  }

  static resolve(value) {
    const promise = new CustomPromise();
    promise._resolve(value);

    return promise;
  }

  static reject(value) {
    const promise = new CustomPromise();
    promise._reject(value);

    return promise;
  }
}
