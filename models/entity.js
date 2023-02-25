/**
 * @typedef EntityParams
 * @type {object}
 * @property {string} id ex: `"4fef-c74e-9ed1-58f0-9f66"`
 * @property {string} type
 * @property {string} title
 */

export class Entity {
  /**
   * Generate a unique identifier of 5 strings (seperated by dash) of 4 characters
   * From https://stackoverflow.com/a/2117523/13491646
   * @returns {string} Identifier
   * @example "4fef-c74e-9ed1-58f0-9f66"
   */

  static generateId() {
    return "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * @constructor
   * @param {EntityParams} params 
   */

  constructor({ id, type, title }) {
    this.id = id;
    this.type = type;
    this.title = title;
  }
}
