// // const name: string = 'wangxiaobia';
// // const age: number = 18;
// // const male: boolean = false;
// // const undef: undefined = undefined;
// // const nul: null = null;
// // const bigIntVar1: bigint = 9007199254740991n;
// // const symbolVar: symbol = Symbol('unique');
// //
// // const temp1: null = null;
// // const temp2: undefined = undefined;
// // const temp3: string = null;
// // const temp4: string = undefined;
// //
// // function func1 () {};
// // function func2 () { return };
// // function func3 () {
// //   return undefined;
// // }
// //
// // const voidVar1: void = null;
// // const voidVar2: void = undefined;
// //
// // const arr1: string[] = [];
// // const arr2: Array<string> = [];
// //
// // const arr3: [string, string, string] = ['wang', 'xiao', 'bai'];
// // arr3[599];
// //
// // const arr4: [string, number, boolean] = ['wang', 599, true];
//
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
//
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
//
// interface IResponseProps {
//   code: number;
//   status: string;
//   data: any;
// }
//
// interface IResponseProps {
//   code: 10000 | 10001 | 50000;
//   status: 'success' | 'failure';
//   data: any;
// }
//
// declare var res: IResponseProps;
//
// if (res.status === 'success') {
//   console.log(res.data);
// }
//
// const name: 'wangxiaobai' = 'wangxiaobai';
// const age: 18 = 18;
// const male: false = false;
//
// const str1: 'wangxiaobai' = 'wangxiaobai18';
// const str2: string = 'wangxiaobai';
// const str3: string = 'wangxiaobai3';
//
// interface ITempProps {
//   bool: true | false;
//   num: 1 | 2 | 3;
//   str: 'wang' | 'xiao' | 'bai'
// }
//
// interface ITempMixedProps {
//   mixed: true | string | 18 | {} | (() => {}) | (1 | 2)
// }
//
// interface ITempProps {
//   user:
//     | {
//     vip: true;
//     expires: string;
//   }
//   | {
//     vip: false;
//     promotion: string;
//   }
// }
//
// declare var temp: ITempProps;
//
// if (temp.user.vip) {
//   console.log(temp.user.expires);
// }
//
// type Code = 10000 | 10001 | 50000;
// type Status = 'success' | 'failure';
//
// interface ITempProps {
//   obj: {
//     name: 'wangxiaobai';
//     age: 18
//   }
// }
//
// const temp: ITempProps = {
//   obj: {
//     name: 'wangxiaobai',
//     age: 18
//   }
// }
//
// enum PageUrl {
//   Home_Page_Url = 'home',
//   Setting_Page_Url = 'setting',
//   Share_Page_Url = 'share',
// }
//
// const home = PageUrl.Home_Page_Url;
//
// enum Items {
//   Foo,
//   Bar,
//   Baz,
// }
//
// enum Items {
//   Foo,
//   Bar = 18,
//   Baz,
// }
//
// const returnNum = () => 100 + 18;
// enum Items {
//   Foo = returnNum(),
//   Bar = 18,
//   Baz,
// }
//
// enum Items {
//   Baz,
//   Foo = returnNum(),
//   Bar = 18,
// }
//
// enum Mixed {
//   Num = 18,
//   Str = 'wangxiaobai'
// }
//
// enum Items {
//   Foo,
//   Bar,
//   Baz,
// }
//
// const fooValue = Items.Foo;
// const fooKey = Items[0];
//
// const enum Items {
//   Foo,
//   Bar,
//   Baz,
// }
//
// const fooValue = Items.Foo;

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

// class Cat {
//   eat(): boolean {
//     return true
//   }
// }
//
// class Dog {
//   eat(): number {
//     return 18
//   }
// }
//
// function feedCat(cat: Cat) {}
//
// feedCat(new Dog())

// declare class TagProtector<T extends string> {
//   private _tag_: T;
// }
//
// type Nominal<T, U extends string> = T & TagProtector<U>;
//
// type CNY = Nominal<number, 'CNY'>;
// type USD = Nominal<number, 'USD'>;
//
// const CNYCount = 100 as CNY;
// const USDCount = 100 as USD;
//
// function addCNY(source: CNY, input: CNY) {
//   return (source + input) as CNY;
// }
//
// addCNY(CNYCount, CNYCount);
//
// addCNY(USDCount, USDCount);

// class CNY {
//   private _tag!: void;
//   constructor(public value: number) {}
// }
//
// class USD {
//   private _tag!: void;
//   constructor(public value: number) {}
// }
//
// const CNYCount = new CNY(100);
// const USDCount = new USD(100);
//
// function addCNY(source: CNY, input: CNY) {
//   return source.value + input.value;
// }
//
// addCNY(CNYCount, CNYCount);
// addCNY(USDCount, USDCount);

// type Result = 'wangxiaobai' extends string ? 1 : 2;
//
// declare let source: string;
// declare let anyType: any;
// declare let neverType: never;
//
// anyType = source;
// neverType = source;

// type Result1 = 'wangxiaobai' extends string ? 1 : 2;
// type Result2 = 1 extends number ? 1 : 2;
// type Result3 = true extends boolean ? 1 : 2;
// type Result4 = { name: string } extends object ? 1 : 2;
// type Result5 = { name: 'wangxiaobai' } extends object ? 1 : 2;
// type Result6 = [] extends object ? 1 : 2;
// type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2;
// type Result8 = 'wang' extends 'wang' | 'xiao' | 'bai' ? 1 : 2;
// type Result9 = true extends true | false ? 1 : 2;
// type Result10 = string extends string | number | false ? 1 : 2;
// type Result11 = 'wang' | 'xiao' | 'bai' extends string ? 1 : 2;
// type Result12 = {} | (() => {}) | [] extends object ? 1 : 2;
// type Result13 = 'wangxiaobai' extends 'wangxiaobai' | 18 ? 'wangxiabai' | '18' extends string ? 2 : 1 : 0;
// type Result14 = string extends String ? 1 : 2;
// type Result15 = String extends {} ? 1 : 2;
// type Result16 = {} extends object ? 1 : 2;
// type Result17 = object extends Object ? 1 : 2;
// type Result18 = string extends object ? 1 : 2;
// type Result19 = {} extends object ? 1 : 2;
// type Result20 = object extends {} ? 1 : 2;
// type Result21 = object extends Object ? 1 : 2;
// type Result22 = Object extends object ? 1 : 2;
// type Result23 = {} extends Object ? 1 : 2;
// type Result24 = Object extends {} ? 1 : 2;
// type Result25 = Object extends any ? 1 : 2;
// type Result26 = Object extends unknown ? 1 : 2;
// type Result27 = any extends Object ? 1 : 2;
// type Result28 = unknown extends Object ? 1 : 2;
// type Result29 = any extends 'wangxiaobai' ? 1 : 2;
// type Result30 = any extends string ? 1 : 2;
// type Result31 = any extends {} ? 1 : 2;
// type Result32 = any extends never ? 1 : 2;
// type Result33 = any extends unknown ? 1 : 2;
// type Result34 = unknown extends any ? 1 : 2;
// type Result35 = never extends 'wangxiaobai' ? 1 : 2;
// type Result36 = undefined extends 'wangxiaobai' ? 1 : 2;
// type Result37 = null extends 'wangxiaobai' ? 1 : 2;
// type Result38 = void extends 'wangxiaobai' ? 1 : 2;
// type Result39 = 1 | 2 | 3 extends 1 | 2 | 3 | 4 ? 1 : 2;
// type Result40 = 2 | 4 extends 1 | 2 | 3 | 4 ? 1 : 2;
// type Result41 = 1 | 2 | 5 extends 1 | 2 | 3 | 4 ? 1 : 2;
// type Result42 = 1 | 5 extends 1 | 2 | 3 | 4 ? 1 : 2;
// type Result43 = [number, number] extends number[] ? 1 : 2;
// type Result44 = [number, string] extends number[] ? 1 : 2;
// type Result45 = [number, string] extends (number | string)[] ? 1 : 2;
// type Result46 = [] extends number[] ? 1 : 2;
// type Result47 = [] extends unknown[] ? 1 : 2;
// type Result48 = number[] extends (number | string)[] ? 1 : 2;
// type Result49 = any[] extends number[] ? 1 : 2;
// type Result50 = unknown[] extends number[] ? 1 : 2;
// type Result51 = never[] extends number[] ? 1 : 2;
//
// type TypeChain = never extends 'wangxiaobai'
//   ? 'wangxiaobai' extends 'wangxiaobai' | '18'
//     ? 'wangxiaobai' | '18' extends string
//       ? string extends String
//         ? String extends Object
//           ? Object extends any
//             ? any extends unknown
//               ? unknown extends any
//                 ? 8
//                 : 7
//               :6
//             :5
//           :4
//         :3
//       :2
//     :1
//   :0
//
// type VerboseTypeChain = never extends 'wangxiaobai'
//   ? 'wangxiaobai' extends 'wangxiaobai' | '18'
//     ? 'wangxiaobai' | '18' extends string
//       ? string extends {}
//         ? string extends String
//           ? String extends {}
//             ? {} extends object
//               ? object extends {}
//                 ? {} extends Object
//                   ? Object extends {}
//                     ? object extends Object
//                       ? Object extends object
//                         ? Object extends any
//                           ? Object extends unknown
//                             ? any extends unknown
//                               ? unknown extends any
//                                 ? 8
//                                 : 7
//                               : 6
//                             : 5
//                           : 4
//                         : 3
//                       : 2
//                     : 1
//                   : 0
//                 : -1
//               : -2
//             : -3
//           : -4
//         : -5
//       : -6
//     : -7
//   : -8

// type LiteralType<T> = T extends string ? 'string' : 'other';
//
// type Res1 = LiteralType<'wangxiaobai'>;
// type Res2 = LiteralType<18>;

// type LiteralType<T> = T extends string
//   ? 'string'
//   : T extends number
//     ? 'number'
//     : T extends boolean
//       ? 'boolean'
//       : T extends null
//         ? 'null'
//         : T extends undefined
//           ? 'undefined'
//           : never
//
// type Res1 = LiteralType<'wangxiaobai'>;
// type Res2 = LiteralType<18>;
// type Res3 = LiteralType<true>;

// function universalAdd<T extends number | bigint | string>(x: T, y: T): LiteralToPrimitive<T> {
//   return x + (y as any);
// }
//
// universalAdd(18, 1);
// universalAdd('wangxiaobai', '18');
//
// type LiteralToPrimitive<T> = T extends number
//   ? number
//   : T extends bigint
//     ? bigint
//     : T extends string
//       ? string
//       : never;

// type Func = (...args: any[]) => any;
//
// type FunctionConditionType<T extends Func> = T extends (...args: any[]) => string ? 'a string return func' : 'a non-string return func';
//
// type StringResult = FunctionConditionType<() => string>;
// type NonStringResult = FunctionConditionType<() => number>;
//
// type FunctionConditionType<T extends Func> = T extends (...args: any[]) => infer R ? R : never;
//
// type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T;
//
// type SwapResult1 = Swap<[1, 2]>;
// type SwapResult2 = Swap<[1, 2, 3]>;
//
// type ExtractStartAndEnd<T extends any[]> = T extends [infer Start, ...any[], infer End] ? [Start, End] : T;
// type SwapStartAndEnd<T extends any[]> = T extends [infer Start, ...infer Left, infer End] ? [End, ...Left, Start] : T;
// type SwapFirstTwo<T extends any[]> = T extends [infer Start1, infer Start2, ...infer Left] ? [Start2, Start1, ...Left] : T;
//
// type ArrayItemType<T> = T extends Array<infer ElementType> ? ElementType : never;
//
// type ArrayItemTypeResult1 = ArrayItemType<[]>;
// type ArrayItemTypeResult2 = ArrayItemType<string[]>;
// type ArrayItemTypeResult3 = ArrayItemType<[string, number]>;
//
// type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R } ? R : never;
//
// type PropTypeResult1 = PropType<{ name: string }, 'name'>;
// type PropTypeResult2 = PropType<{ name: string; age: number }, 'name' | 'age'>;
//
// type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<infer K, infer V> ? Record<V & string, K> : never;
//
// type ReverseKeyValueResult = ReverseKeyValue<{ 'key': 'value' }>;
//
// type PromiseValue<T> = T extends Promise<infer V> ? V : T;
//
// type PromiseValueResult1 = PromiseValue<Promise<number>>;
// type PromiseValueResult2 = PromiseValue<number>;

// type PromiseValue<T> = T extends Promise<infer V> ? V extends Promise<infer N> ? N : V : T;
//
// type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T;
//
// type Condition<T> = T extends 1 | 2 | 3 ? T : never;
//
// type Res1 = Condition<1 | 2 | 3 | 4 | 5>;
// type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;
//
// type Naked<T> = T extends boolean ? 'Y' : 'N';
// type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N';
//
// type Res3 = Naked<number | boolean>;
// type Res4 = Wrapped<number | boolean>;
//
// type CompareUnion<T, U> = [T] extends [U] ? true : false;
//
// type CompareUnionRes1 = CompareUnion<1 | 2, 1 |2 |3>;
// type CompareUnionRes2 = CompareUnion<1 | 2, 1>;
//
// type IsNever<T> = T extends never ? true : false;
//
// type IsNeverRes1 = IsNever<never>;
// type IsNeverRes2 = IsNever<'wangxiaobai'>;
//
// type Tmp1 = any extends string ? 1 : 2;  // 1 | 2
// type Tmp2<T> = T extends string ? 1 : 2;
// type Tmp2Res = Tmp2<any>; // 1 | 2
// type Special1 = any extends any ? 1 : 2; // 1
// type Special2<T> = T extends any ? 1 : 2;
// type Special2Res = Special2<any>; // 1
//
// type Intersection<A, B> = A extends B ? A : never;
// type IntersectionRes = Intersection<1 | 2 | 3, 2 | 3 | 4>;

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }
//
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// }
//
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }
//
// interface Foo {
//   optional: string | undefined;
//   required: boolean;
// }
//
// const foo1: Foo = {
//   optional: undefined,
//   required: false,
// }

// type Readonly<T> = {
//   +readonly [P in keyof T]: T[P];
// }
//
// type Mutable<T> = {
//   -readonly [P in keyof T]: T[P];
// }

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// }
//
// type Record1 = Record<string, unknown>;
// type Record2= Record<string, any>;
// type Record3 = Record<string | number, any>;
//
// type Dictionary<T> = {
//   [index: string]: T;
// }
//
// type NumericDictionary<T> = {
//   [index: number]: T;
// }

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// }
//
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
//
// interface Foo {
//   name: string;
//   age: number;
// }
//
// type PickedFoo = Pick<Foo, 'name'>;
//
// type Temp1 = Exclude<1 | 2, 2>;
// type Temp2 = Exclude<1 | 2 | 3, 2 | 4>;
//
// type Omit1<T, K> = Pick<T, Exclude<keyof T, K>>;
// type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//
// declare function combineSpread<T1, T2>(obj: T1, otherObj: T2, rest: Omit1<T1, keyof T2>): void;
//
// type Point3d = {
//   x: number;
//   y: number;
//   z: number;
// }
// declare const p1: Point3d;
//
// combineSpread(p1, {x: 10}, {z: 2});


// type Extract<T, U> = T extends U ? T : never;
// type Exclude<T, U> = T extends U ? never : T;
//
// type AExtractB = Extract<1 | 2 | 3, 1 | 2 | 3 | 4>;
// type _AExtractB =
//   | (1 extends 1 | 2 | 4 ? 1 : never)
//   | (2 extends 1 | 2 | 4 ? 2 : never)
//   | (3 extends 1 | 2 | 4 ? 3 : never)

// type SetA = 1 | 2 | 3 | 5;
// type SetB = 0 | 1 | 2 | 4;
//
// type AExcludeB = Exclude<SetA, SetB>;
// type BExcludeA = Exclude<SetB, SetA>;
//
// type _AExcludeB =
//   | (1 extends 0 | 1 | 2 | 4 ? never : 1)
//   | (2 extends 0 | 1 | 2 | 4 ? never : 2)
//   | (3 extends 0 | 1 | 2 | 4 ? never : 3)
//   | (5 extends 0 | 1 | 2 | 4 ? never : 5)
//
// type _BExcludeA =
//   | (0 extends 1 | 2 | 3 | 5 ? never : 0)
//   | (1 extends 1 | 2 | 3 | 5 ? never : 1)
//   | (2 extends 1 | 2 | 3 | 5 ? never : 2)
//   | (4 extends 1 | 2 | 3 | 5 ? never : 4)

// type Concurrence<A, B> = A | B;
// type Intersection<A, B> = A extends B ? A : never;
// type Difference<A, B> = A extends B ? never : A;
// type Complement<A, B extends A> = Difference<A, B>;
//
// type NonNullable<T> = T extends null | undefined ? never : T;
// type _NonNullable<T> = Difference<T, null | undefined>;

// type FunctionType = (...args: any) => any;
//
// type Parameters<T extends FunctionType> = T extends (...args: infer P) => any ? P : never;
// type ReturnType<T extends FunctionType> = T extends (...args: any) => infer R ? R : any;
//
// type FirstParameter<T extends FunctionType> = T extends (arg: infer P, ...args: any) => any ? P : never;
//
// type FuncFoo = (age: number) => any;
// type FuncBar = (...args: string[]) => any;
//
// type FooFirstParameter = FirstParameter<FuncFoo>;
// type BarFirstParameter = FirstParameter<FuncBar>;
//
// type ClassType = abstract new (...args: any) => any;
//
// type ConstructorParameters<T extends ClassType> = T extends abstract new (...args: infer P) => any ? P : never;
// type InstanceType<T extends ClassType> = T extends abstract new (...args: any) => infer R ? R : any;
//

// window.onerror = (event, source, line, col, err) => {};
//
// type CustomHandler = (name: string, age: number) => boolean;
//
// const handler: CustomHandler = (arg1, arg2) => true;
//
// declare const struct: {
//   handler: CustomHandler;
// }
//
// struct.handler = (name, age) => {};
//
// window.onerror = (event) => {};
// window.onerror = (event, source, line, col, err, extra) => {}

// declare let func: (raw: number) => (input: string) => any;
//
// func = (raw) => {
//   return (input) => {}
// }

// class Foo {
//   foo!: number;
// }
//
// class Bar extends Foo {
//   bar!: number;
// }
//
// // let f1: { (input: Foo): void } | { (input: Bar): void }
//
// let f1: { (input: Foo | Bar): void }
//
// f1 = (input) => {}
//
// let f3:
//   | { (raw: number): (input: Foo) => void }
//   | { (raw: number): (input: Bar) => void }
//
// f3 = (raw) => input => {}
//
// type CustomHandler = (name: string, age: number) => void;
//
// const handler1: CustomHandler = (name, age) => true;
// const handler2: CustomHandler = (name, age) => 'wangxiaobai';
// const handler3: CustomHandler = (name, age) => null;
// const handler4: CustomHandler = (name, age) => undefined;
//
// const result1 = handler1('wangxiaobai', 18);
// const result2 = handler2('wangxiaobai', 18);
// const result3 = handler3('wangxiaobai', 18);
// const result4 = handler4('wangxiaobai', 18);

// class Animal {
//   asPet() {}
// }
//
// class Dog extends Animal {
//   bark() {}
// }
//
// class Corgi extends Dog {
//   cute() {}
// }
//
// function makeDogBark(dog: Dog) {
//   dog.bark();
// }
//
// makeDogBark(new Corgi());
// makeDogBark(new Animal());
//
// type DogFactory = (args: Dog) => Dog;
//
// function transformDogAndBark(dogFactory: DogFactory) {
//   const dog = dogFactory(new Dog());
//   dog.bark();
// }

// type PromiseValue<T> =  T extends Promise<infer V> ? PromiseValue<V> : T;
//
// type DeepPartial<T extends object> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// }
//
// type DeepRequired<T extends object> = {
//   [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
// }
//
// type DeepReadonly<T extends object> = {
//   readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
// }
//
// type DeepMutable<T extends object> = {
//   -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K];
// }
//
// type NonNullable<T> = T extends null | undefined ? never : T;
//
// type DeepNonNullable<T extends object> = {
//   [K in keyof T]: T[K] extends object ? DeepNonNullable<T[K]> : NonNullable<T[K]>;
// }
//
// type Nullable<T> = T | null;
//
// type DeepNullable<T extends object> = {
//   [K in keyof T]: T[K] extends object ? DeepNullable<T[K]> : Nullable<T[K]>;
// }
//
// type Flatten<T> = {
//   [K in keyof T]: T[K];
// }
//
// type MakePropsAsOptional<T extends object, K extends keyof T = keyof T> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;
//
// type MakePropsAsRequired<T extends object, K extends keyof T = keyof T> = Flatten<Required<Pick<T, K>> & Omit<T, K>>;
//
// type MakePropsAsReadonly<T extends object, K extends keyof T = keyof T> = Flatten<Readonly<Pick<T, K>> & Omit<T, K>>;
//
// type MakePropsAsNullable<T extends object, K extends keyof T = keyof T> = Flatten<Nullable<Pick<T, K>> & Omit<T, K>>;
//
// type MakePropsAsNonNullable<T extends object, K extends keyof T = keyof T> = Flatten<NonNullable<Pick<T, K>> & Omit<T, K>>;






