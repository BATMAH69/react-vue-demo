/* eslint-disable */

import {
  identity,
  multiply,
  perspective,
  translate,
  translate3d,
  rotateY,
  toString,
} from 'rematrix';

export default class Matrix {
  constructor(arg) {
    if (arg) {
      if (arg.m) {
        this.m = [...arg.m];
      } else {
        this.m = [...arg];
      }
    } else {
      this.m = identity();
    }
    this.clone = this.clone.bind(this)
    this.multiply = this.multiply.bind(this)
    this.perspective = this.perspective.bind(this)
    this.transformX = this.transformX.bind(this)
    this.translate = this.translate.bind(this)
    this.translate3d = this.translate3d.bind(this)
    this.rotateY = this.rotateY.bind(this)
    this.toString = this.toString.bind(this)
  }

  clone() { return new Matrix(this);};

  multiply(m) { return (this.m = multiply(this.m, m));};

  perspective(d) { return this.multiply(perspective(d));};

  transformX(x) { return (x * this.m[0] + this.m[12]) / (x * this.m[3] + this.m[15]);};

  translate(x, y) { return this.multiply(translate(x, y));};

  translate3d(x, y, z) { return this.multiply(translate3d(x, y, z));};

  rotateY(deg) { return this.multiply(rotateY(deg));};

  toString() { return toString(this.m);};

};
