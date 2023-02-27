// const name: string = 'wangxiaobia';
// const age: number = 18;
// const male: boolean = false;
// const undef: undefined = undefined;
// const nul: null = null;
// const bigIntVar1: bigint = 9007199254740991n;
// const symbolVar: symbol = Symbol('unique');
//
// const temp1: null = null;
// const temp2: undefined = undefined;
// const temp3: string = null;
// const temp4: string = undefined;
//
// function func1 () {};
// function func2 () { return };
// function func3 () {
//   return undefined;
// }
//
// const voidVar1: void = null;
// const voidVar2: void = undefined;
//
// const arr1: string[] = [];
// const arr2: Array<string> = [];
//
// const arr3: [string, string, string] = ['wang', 'xiao', 'bai'];
// arr3[599];
//
// const arr4: [string, number, boolean] = ['wang', 599, true];

// const arr5: [string, number?, boolean?] = ['wang'];
//
// const arr6: [name: string, age: number, male: boolean] = ['wang', 599, false];
//
// const arr7: [name: string, age?: number, male?: boolean] = ['wang'];
//
// interface IDescription {
//   name: string;
//   age: number;
//   male?: boolean;
//   func?: Function;
// }
//
// const obj2: IDescription = {
//   name: 'wangxiaobai',
//   age: 599,
// }
//
// obj2.func();
// obj2.male;
//
// obj2.male = false;
// obj2.func = () => {};
//
// interface IDescriptionProps {
//   readonly name: string;
//   age: number;
// }
//
// const obj3: IDescriptionProps = {
//   name: 'wangxiaobai',
//   age: 18,
// };
//
// obj3.name = 'OweQian';

// const temp1: Object = undefined;
// const temp2: Object = null;
// const temp3: Object = void 0;
// const temp4: Object = 'wangxiaobai';
// const temp5: Object = 18;
// const temp6: Object = () => {};
// const temp7: Object = { name: 'wangxiaobai' };
// const temp8: Object = [];
//
// const temp9: String = undefined;
// const temp10: String = null;
// const temp11: String = void 0;
// const temp12: String = 'wangxiaobai';
//
// // 以下不成立，因为不是字符串类型的拆箱类型
// const temp13: String = 18; // X
// const temp14: String = { name: 'wangxiaobai' }; // X
// const temp15: String = () => {}; // X
// const temp16: String = []; // X
//
// const temp17: object = undefined;
// const temp18: object = null;
// const temp19: object = void 0;
//
// const temp20: object = 'wangxiaobai'; // X
// const temp21: object = 18; // X
//
// const temp22: object = { name: 'wangxiaobai' };
// const temp23: object = () => {};
// const temp24: object = [];
//
// const temp25: {} = undefined;
// const temp26: {} = null;
// const temp27: {} = void 0;
// const temp28: {} = 'wangxiaobai';
// const temp29: {} = 18;
// const temp30: {} = () => {};
// const temp31: {} = { name: 'wangxiaobai' };
// const temp32: {} = [];
//
// temp31.age = 18;

// function foo (name: string): number {
//   return name.length;
// }
//
// const foo = function (name: string): number {
//   return name.length;
// }
//
// const foo = (name: string): number => {
//   return name.length;
// }
//
// const foo: (name: string) => number = (name) => {
//   return name.length;
// }
//
// type FuncFoo = (name: string) => number;
//
// const foo: FuncFoo = (name) => {
//   return name.length;
// }
//
// interface IFuncFoo {
//   (name: string): number;
// }
//
// function foo(): void {}
//
// function bar(): undefined { return }
//
// function foo1 (name: string, age?: number): number {
//   const inputAge = age ?? 18;
//   return name.length + inputAge;
// }
//
// function foo2 (name: string, age: number = 18): number {
//   const inputAge = age ?? 18;
//   return name.length + inputAge;
// }
//
// function foo (arg1: string, ...rest: any[]) {}
//
// function foo (arg1: string, ...rest: [number, boolean]) {}
//
// function func (foo: number, bar?: boolean): string | number {
//   if (bar) {
//     return String(foo);
//   } else {
//     return foo * 18;
//   }
// }
//
// function func (foo: number, bar: false): number;
// function func (foo: number, bar?: true): string;
// function func (foo: number, bar?: boolean): string | number {
//   if (bar) {
//     return String(foo);
//   } else {
//     return foo * 18;
//   }
// }
//
// const res1 = func(18); // number
// const res2 = func(18, true); // string
// const res3 = func(18, false); // number
//
// async function asyncFunc(): Promise<void> {}
// function* genFunc(): Iterable<void> {}
// async function* asyncGenFunc(): AsyncIterable<void> {}

class Foo {
  prop: string;

  constructor(inputProps: string) {
    this.prop = inputProps;
  }

  print (addon: string): string {
    return `${this.prop} and ${addon}`;
  }

  get PropA(): string {
    return `${this.prop}+A`;
  }

  set PropA(value: string) {
    this.prop = `${value}`;
  }
}

const Foo = class {
  prop: string;

  constructor(inputProps: string) {
    this.prop = inputProps;
  }

  print (addon: string): string {
    return `${this.prop} and ${addon}`;
  }

  get PropA(): string {
    return `${this.prop}+A`;
  }

  set PropA(value: string) {
    this.prop = `${value}`;
  }
}

class Foo {
  private prop: string;

  constructor(inputProps: string) {
    this.prop = inputProps;
  }

  protected print (addon: string): string {
    return `${this.prop} and ${addon}`;
  }

  public get PropA(): string {
    return `${this.prop}+A`;
  }

  public set PropA(value: string) {
    this.prop = `${value}`;
  }
}

class Foo {
  constructor(public arg1: string, private arg2: boolean) {
  }
}

new Foo('wangxiaobai', false);

class Foo {
  static staticHandler () {}
  public instanceHandler () {}
}

class Utils {
  static identifier = 'wangxiaobai'

  static studyWithU () {

  }

  static makeUHappy () {
    Utils.studyWithU()
  }
}

Utils.makeUHappy()

class Base {}

class Derived extends Base {}

class Base {
  print () {}
}

class Derived extends Base {
  print() {
    super.print();
    // ...
  }
}

class Base {
  printWithLove() {}
}

class Derived extends Base {
  override print() {
    super.print();
  }
}

abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter (): string;
  abstract absMethod (name: string): string;
}

class Foo implements AbsFoo {
  absProp: string = 'wangxiaobai';

  get absGetter(): string {
    return 'wangxiaobai';
  }

  absMethod(name: string): string {
    return name;
  }
}

interface IFooStruct {
  absProp: string;
  get absGetter (): string;
  absMethod (name: string): string;
}

class Foo implements IFooStruct {
  absProp: string = 'wangxiaobai';

  get absGetter(): string {
    return 'wangxiaobai';
  }

  absMethod(name: string): string {
    return name;
  }
}