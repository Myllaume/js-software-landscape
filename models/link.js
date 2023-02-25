/**
 * @typedef LinkParams
 * @type {object}
 * @property {string} source ex: `"4fef-c74e-9ed1-58f0-9f66"`
 * @property {string} target ex: `"4fef-c74e-9ed1-58f0-9f66"`
 */

export class Link {
  /**
   * @constructor
   * @param {LinkParams} params
   */

  constructor({ source, target }) {
    this.source = source;
    this.target = target;
  }
}
