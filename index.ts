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

// class Foo {
//   prop: string;
//
//   constructor(inputProps: string) {
//     this.prop = inputProps;
//   }
//
//   print (addon: string): string {
//     return `${this.prop} and ${addon}`;
//   }
//
//   get PropA(): string {
//     return `${this.prop}+A`;
//   }
//
//   set PropA(value: string) {
//     this.prop = `${value}`;
//   }
// }
//
// const Foo = class {
//   prop: string;
//
//   constructor(inputProps: string) {
//     this.prop = inputProps;
//   }
//
//   print (addon: string): string {
//     return `${this.prop} and ${addon}`;
//   }
//
//   get PropA(): string {
//     return `${this.prop}+A`;
//   }
//
//   set PropA(value: string) {
//     this.prop = `${value}`;
//   }
// }
//
// class Foo {
//   private prop: string;
//
//   constructor(inputProps: string) {
//     this.prop = inputProps;
//   }
//
//   protected print (addon: string): string {
//     return `${this.prop} and ${addon}`;
//   }
//
//   public get PropA(): string {
//     return `${this.prop}+A`;
//   }
//
//   public set PropA(value: string) {
//     this.prop = `${value}`;
//   }
// }
//
// class Foo {
//   constructor(public arg1: string, private arg2: boolean) {
//   }
// }
//
// new Foo('wangxiaobai', false);
//
// class Foo {
//   static staticHandler () {}
//   public instanceHandler () {}
// }
//
// class Utils {
//   static identifier = 'wangxiaobai'
//
//   static studyWithU () {
//
//   }
//
//   static makeUHappy () {
//     Utils.studyWithU()
//   }
// }
//
// Utils.makeUHappy()
//
// class Base {}
//
// class Derived extends Base {}
//
// class Base {
//   print () {}
// }
//
// class Derived extends Base {
//   print() {
//     super.print();
//     // ...
//   }
// }
//
// class Base {
//   printWithLove() {}
// }
//
// class Derived extends Base {
//   override print() {
//     super.print();
//   }
// }
//
// abstract class AbsFoo {
//   abstract absProp: string;
//   abstract get absGetter (): string;
//   abstract absMethod (name: string): string;
// }
//
// class Foo implements AbsFoo {
//   absProp: string = 'wangxiaobai';
//
//   get absGetter(): string {
//     return 'wangxiaobai';
//   }
//
//   absMethod(name: string): string {
//     return name;
//   }
// }
//
// interface IFooStruct {
//   absProp: string;
//   get absGetter (): string;
//   absMethod (name: string): string;
// }
//
// class Foo implements IFooStruct {
//   absProp: string = 'wangxiaobai';
//
//   get absGetter(): string {
//     return 'wangxiaobai';
//   }
//
//   absMethod(name: string): string {
//     return name;
//   }
// }

// const log: (message?: any, ...rest: any[]) => void
//
// let foo
//
// function func (foo, bar) {}
//
// let anyVar: any = 'wangxiaobai'
//
// anyVar = false
//
// anyVar = 'oweQian'
//
// anyVar = {
//   site: 'github.io'
// }
//
// anyVar = () => {}
//
// const var1: string = anyVar;
// const var2: number = anyVar;
// const var3: () => {} = anyVar;
// const val4: {} = anyVar;
//
// let anyVar: any = null;
// anyVar.baz();
// anyVar[0]
//
// let unknownVar: unknown = 'wangxiaobai'
//
// unknownVar = false
// unknownVar = 'oweQian'
// unknownVar = {
//   site: 'github.io'
// }
// unknownVar = () => {}
//
// const var1: string = unknownVar;
// const var2: number = unknownVar;
// const var3: () => {} = unknownVar;
// const var4: {} = unknownVar;
//
// const var5: any = unknownVar;
// const var6: unknown = unknownVar;
//
// unknownVar.foo();
//
// type UnionWithNever = 'wangxiaobai' | 18 | true | void | never;
//
// declare let v1: never;
// declare let v2: void;
//
// v1 = v2;
//
// v2 = v1;
//
// function justThrow(): never {
//   throw new Error()
// }
//
// function foo (input: number) {
//   if (input > 1) {
//     justThrow();
//     const name = 'wangxiaobai';
//   }
// }
//
// let unknownVar: unknown;
// (unknownVar as { foo: () => {}}).foo();
//
// function foo (union: string | number) {
//   if ((union as string).includes('wangxiaobai')) {}
//   if ((union as number).toFixed() === '18') {}
// }
//
// interface IFoo {
//   name: string;
// }
//
// declare const obj: {
//   foo: IFoo
// }
//
// const {
//   foo = {} as IFoo
// } = obj
//
// const str: string = 'wangxiaobai'
//
// (str as { handler: () => {} }).handler();
//
// (str as unknown as { handler: () => {} }).handler();

// (<{ handler: () => {}}>(<unknown>str)).handler()
//
// declare const foo: {
//   func?: () => ({
//     prop?: number | null
//   })
// }
//
// foo.func!().prop!.toFixed()
//
// foo.func?.().prop?.toFixed()
//
// const element = document.querySelector('#id')!;
// const target = [1, 2, 3, 18].find(item => item === 18)!;
//
// interface IStruct {
//   foo: string;
//   bar: {
//     barPropA: string;
//     barPropB: string;
//     barMethod: () => void;
//     baz: {
//       handler: () => Promise<void>;
//     }
//   }
// }
//
// const obj: IStruct = <IStruct>{
//   bar: {
//     baz: {}
//   }
// }

// type A = string;
//
// type StatusCode = 200 | 301 | 400 | 500 | 502;
// type PossibleDataTypes = string | number | (() => unknown);
//
// const status: StatusCode = 301;
//
// type Handler = (e: Event) => void;
//
// const clickHandler = (e: Event) => {}
// const moveHandler = (e: Event) => {}
// const dragHandler = (e: Event) => {}
//
// type ObjType = {
//   name: string;
//   age: number;
// }
//
// type Factory<T> = T | number | string;
//
// const foo: Factory<boolean> = true;
//
// type FactoryWithBool = Factory<boolean>;
//
// const foo: FactoryWithBool = true;
//
// type MaybeNull<T> = T | null;
//
// function process(input: MaybeNull<{ handler: () => {}}>) {
//   input?.handler();
// }
//
// type MaybeArray<T> = T | T[];
//
// function ensureArray<T>(input: MaybeArray<T>): T[] {
//   return Array.isArray(input) ? input : [input]
// }
//
// interface INameStruct {
//   name: string;
// }
//
// interface IAgeStruct {
//   age: number;
// }
//
// type ProfileStruct = INameStruct & IAgeStruct;
//
// const profile: ProfileStruct = {
//   name: 'wangxiaobai',
//   age: 18
// }
//
// type StrAndNum = string & number;
//
// type Struct1 = {
//   primitiveProp: string;
//   objectProp: {
//     name: string;
//   }
// }
//
// type Struct2 = {
//   primitiveProp: number;
//   objectProp: {
//     age: number;
//   }
// }
//
// type Composed = Struct1 & Struct2
//
// type PrimitivePropType = Composed['primitiveProp'];
// type objectPropType = Composed['objectProp'];
//
// type UnionIntersection1 = (1 | 2 | 3) & (1 | 2);
// type UnionIntersection2 = (string | number | symbol) & string;
//
// interface AllStringTypes {
//   [key: string]: string;
// }
//
// interface AllStringTypes {
//   propA: number;
//   [key: string]: string;
// }
//
// interface StringOrBooleanTypes {
//   propA: number;
//   propB: boolean;
//   [key: string]: number | boolean;
// }
//
// interface IAnyTypeHere {
//   [key: string]: any;
// }
//
// interface IFoo {
//   wangxiaobai: 1,
//   18: 2,
// }
//
// type FooKeys = keyof IFoo;
//
// type AnyKeys = keyof any;
//
//
// interface NumberRecord {
//   [key: string]: number;
// }
//
// type PropType = NumberRecord[string];
//
// interface Foo {
//   propA: string;
//   propB: boolean;
// }
//
// type PropAType = Foo['propA'];
// type PropBType = Foo['propB'];

// interface IFoo {
//   propA: string;
//   propB: boolean;
//   propC: number;
// }
//
// type PropTypeUnion = IFoo[keyof IFoo]
//
// type Stringify<T> = {
//   [k in keyof T]: string;
// }
//
// interface IFoo {
//   prop1: string;
//   prop2: number;
//   prop3: boolean;
//   prop4: () => void;
// }
//
// type StringifiedFoo = Stringify<IFoo>;
//
// type Clone<T> = {
//   [k in keyof T]: T[k]
// }
//
// const str = 'wangxiaobai';
// const obj = {
//   name: 'wangxiaobai'
// }
// const nullVar = null;
// const undefinedVar = undefined;
//
// const func = (input: string) => {
//   return input.length > 10;
// }
//
// type Str = typeof str;
// type Null = typeof nullVar;
// type Undefined = typeof undefinedVar;
// type Obj = typeof obj;
// type Func = typeof func;
//
// const func2: typeof func = (name: string) => {
//   return name === 'wangxiaobai';
// }
//
// function foo (input: string | number) {
//   if (typeof input === 'string') {}
//   if (typeof input === 'number') {}
// }
//
// declare const strOrNumOrBool: string | number | boolean;
//
// if (typeof strOrNumOrBool === 'string') {
//   // 一定是字符串！
//   strOrNumOrBool.charAt(1);
// } else if (typeof strOrNumOrBool === 'number') {
//   // 一定是数字！
//   strOrNumOrBool.toFixed();
// } else if (typeof strOrNumOrBool === 'boolean') {
//   // 一定是布尔值！
//   strOrNumOrBool === true;
// } else {
//   // 要是走到这里就说明有问题！
//   const _exhaustiveCheck: never = strOrNumOrBool;
//   throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
// }

// function isString (input: unknown): boolean {
//   return typeof input === 'string';
// }
//
// function foo (input: string | number) {
//   if (isString(input)) {
//     input.replace('wangxiaobai', 'wangxiaobai18');
//   }
//   if (typeof input === 'number') {}
// }

// function isString (input: unknown): input is string {
//   return typeof input === 'string';
// }
//
// function foo (input: string | number) {
//   if (isString(input)) {
//     input.replace('wangxiaobai', 'wangxiaobai18');
//   }
//   if (typeof input === 'number') {}
// }

// function isString (input: unknown): input is number {
//   return typeof input === 'string';
// }
//
// function foo (input: string | number) {
//   if (isString(input)) {
//     input.replace('wangxiaobai', 'wangxiaobai18');
//   }
//   if (typeof input === 'number') {}
// }

// type Falsy = false | '' | null | undefined;
// const isFalsy = (input: unknown): input is Falsy => !input;
//
// type Primitive = string | number | boolean | undefined;
// const isPrimitive = (input: unknown): input is Primitive => ['string', 'number', 'boolean', 'undefined'].includes(typeof input);

// interface Foo {
//   foo: string;
//   fooOnly: boolean;
//   shared: number;
// }
//
// interface Bar {
//   bar: string;
//   barOnly: boolean;
//   shared: number;
// }
//
// function handle (input: Foo | Bar) {
//   if ('foo' in input) {
//     return input.fooOnly;
//   } else {
//     return input.barOnly;
//   }
// }
//
// function ensureArray(input: number | number[]): number[] {
//   if (Array.isArray(input)) {
//     return input;
//   } else {
//     return [input];
//   }
// }
//
// interface Foo {
//   kind: 'foo';
//   diffType: string;
//   fooOnly: boolean;
//   shared: number;
// }
//
// interface Bar {
//   kind: 'bar';
//   diffType: number;
//   barOnly: boolean;
//   shared: number;
// }
//
// function handle1(input: Foo | Bar) {
//   if (input.kind === 'foo') {
//     input.fooOnly;
//   } else {
//     input.barOnly;
//   }
// }
//
// class FooBase {}
//
// class BarBase {}
//
// class Foo extends FooBase {
//   fooOnly() {}
// }
// class Bar extends BarBase {
//   barOnly() {}
// }
//
// function handle(input: Foo | Bar) {
//   if (input instanceof FooBase) {}
//   if (input instanceof BarBase) {}
// }

// let name: any = 'wangxiaobai';
//
// function assertIsNumber (input: any): asserts input is number {
//   if (typeof input !== 'number') {
//     throw new Error('input is not a number')
//   }
// }
//
// assertIsNumber(name);
//
// name.toFixed();
//
// type Factory<T> = T | number | string;
//
// type Stringify<T> = {
//   [K in keyof T]: string;
// }
//
// type Clone<T> = {
//   [K in keyof T]: T[K];
// }

// type Partial<T> = {
//   [K in keyof T]?: T[K]
// }

// interface IFoo {
//   prop1: string;
//   prop2: number;
//   prop3: boolean;
//   prop4: () => void;
// }
//
// type PartialFoo = Partial<IFoo>;
//
// type IsEqual<T> = T extends true ? 1 : 2;
//
// type A = IsEqual<true>;
// type B = IsEqual<false>;
// type C = IsEqual<'wangxiaobai'>;

// type Factory<T = boolean> = T | string | number;
//
// const foo: Factory = false;
//
// type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002 ? 'success' : 'failure';
//
// type Res1 = ResStatus<10000>;
// type Res2 = ResStatus<20000>;
// type Res3 = ResStatus<'10000'>;

// type ResStatus<ResCode extends number = 10000> = ResCode extends 10000 | 10001 | 10002 ? 'success' : 'failure';
//
// type Res1 = ResStatus;

// type Conditional<Type, Condition, TruthyResult, FalsyResult> = Type extends Condition ? TruthyResult : FalsyResult;
//
// type Result1 = Conditional<'wangxiaobai', string, 'passed', 'rejected'>;
// type Result2 = Conditional<'wangxiaobai', boolean, 'passed', 'rejected'>;
//
// type ProcessInput<Input, SecondInput extends Input = Input, ThirdInput extends SecondInput = SecondInput> = number;
//
// interface IRes<TData = unknown> {
//   code: number;
//   error?: string;
//   data: TData;
// }
//
// interface IUserProfileRes {
//   name: string;
//   homePage: string;
//   avatar: string;
// }
//
// function fetchUserProfile(): Promise<IRes<IUserProfileRes>> {}
//
// type StatusSucceed = boolean;
//
// function handleOperation(): Promise<IRes<StatusSucceed>> {}
//
// interface IPaginationRes<TItem = unknown> {
//   data: TItem[];
//   page: number;
//   totalCount: number;
//   hasNextPage: boolean;
// }
//
// function fetchUserProfileList(): Promise<IRes<IPaginationRes<IUserProfileRes>>> {}
//
// function handle<T>(input: T): T {}
//
// function swap<T, U>([start, end]: [T, U]): [U, T] {
//   return [end, start];
// }
//
// const swapped1 = swap(['wangxiaobai', 18]);
// const swapped2 = swap([null, 18]);
// const swapped3 = swap([{name: 'wangxiaobai'}, {}])

// function handle<T extends string | number>(input: T): T {}
//
// function swap<T extends number, U extends number>([start, end]: [T, U]): [U, T] {
//   return [end, start];
// }
//
// function pick<T extends object, U extends keyof T>(object: T, ...props: U[]): Pick<T, U> {}

// function handle<T>(payload: T): Promise<T[]> {
//   return new Promise<T[]>((resolve, reject) => {
//     resolve([payload])
//   })
// }

// const handle = <T extends any>(input: T): T => {}

// class Queue<IElementType> {
//   private _list: IElementType[]
//   constructor(initial: IElementType[]) {
//     this._list = initial
//   }
//
//   enqueue<TType extends IElementType>(ele: TType) {
//     this._list.push(ele);
//     return this._list;
//   }
//
//   enqueueWithUnknownType<TType>(element: TType): (IElementType | TType)[] {
//     return [...this._list, element];
//   }
//
//   dequeue(): IElementType[] {
//     this._list.shift();
//     return this._list;
//   }
// }

// function p() {
//   return new Promise<boolean>((resolve, reject) => {
//     resolve(true)
//   })
// }
//
// const arr: Array<number> = [1, 2, 3];
//
// arr.push('wangxiaobai');
