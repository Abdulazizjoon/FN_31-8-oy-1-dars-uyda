"use strict";
//1-mashq
// let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function kv(n: number[]): number[] {
//     return n.map((value) => {
//       return value * value;
//   })
// }
// console.log(kv(num));
//2-mashq
// let str: string[] = [
//     'abdulaziz',
//     'abdurahimov',
//     'olma',
//     'anor',
//     'uzum'
// ];
// function res(n: string[], minLength: number): string[] {
//     return n.filter((value) => {
//         return value.length >= minLength;
//     });
// }
// console.log(res(str, 5));  buni qila olmadim
//3-mashq
// let str = prompt("ismingizni kiriting");
// let arr: string[] = ["abdulaziz", "abdurahimov", "test"];
// function res(n: string[]): string {
//   return n.includes(str as string) ? "malumot bor" : "malumot yoq";
// }
// console.log(res(arr));
//4-mashq
// let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function res(n:number[]):number[] {
//     return n.filter((value) => {
//         if (value%2==0) {
//             return value
//         }
//     })
// }
// console.log(res(num));
//5-mashq
//6-mashq
// interface user {
//     ism: string;
//     yosh: number;
//     kurs: number;
// }
// function res(user: user) {
//     console.log(user.ism);
//     console.log(user.yosh);
//     console.log(user.kurs);
// }
// let student: user = {
//     ism: "Abdulaziz",
//     yosh: 20,
//     kurs: 2
// };
// res(student);
//7-mashq
// interface Car{
//     name: string
//     yil: number
// }
// let car:Car = {
//     name: 'BMW',
//     yil:2020
// }
// function res(n:Car) {
//     return `name ${n.name} yili ${n.yil}`
// }
// console.log(res(car));
//8-mashq
// interface Kitob{
//     name: string
//     yil: number
// }
// let kitob:Kitob = {
//     name: 'BMW',
//     yil:2023
// }
// function res(n: Kitob) {
//     return {...n}
// }
// let sum = res(kitob)
// sum.name='abdulaziz'
// console.log('sum',sum);
// console.log('res',kitob);
//9-mashq
//  interface Kitob{
//     name: string
//     yil: number
// }
// let kitob:Kitob = {
//     name: 'BMW',
//     yil:2023
// }
// function res(n:Kitob) {
//     return Object.keys(n)
// }
// console.log(res(kitob));
//10-mashq
//  interface Kitob{
//     name: string
//     yil: number
// }
// let kitob:Kitob = {
//     name: 'BMW',
//     yil:2023
// }
// function res(n:Kitob) {
//     return Object.values(n)
// }
// console.log(res(kitob));
//11-mashq
// interface User{
//     name: string
//     age:number
// }
// let user: User = {
//     name: 'Abdulaziz',
//     age:16
// }
// console.log(user);
//12-mashq
// interface User {
//   name: string;
//     age: number;
//     id: number
//     maosh: number
//     lavozim:string
// }
// let user: User = {
//   name: "Abdulaziz",
//     age: 16,
//     id: 1,
//     maosh: 100000,
//     lavozim:'ishchi'
// };
// function res(n:User) {
//     console.log(n);
// }
// res(user)
//14-mashq
// interface User {
//   readonly name : string;
//  readonly age: number;
// }
// let user: User = {
//     name: "Abdulaziz",
//     age:0
// };
// console.log(user);
//15-mashq
// let test: any = 0
// console.log(test);
// test = 'abdulaziz'
// console.log(test);
//16-mashq
// function test(n:any) {
//     console.log(typeof n);
// }
// test('abdulaziz')
// test(6)
//17-mashq
// let test: any = [
//     'vfdg ',
//     2,
//     'advf'
//     ,5
// ]
// function res(n:any) {
//     n.map(value => {
//         if (typeof value =='string') {
//             console.log(value);
//         }
//     })
// }
// res(test)
//18-mashq
// enum Kunlar {
//     dushanba = "Dushanba",
//     seshanba = "Seshanba",
//     chorshanba = "Chorshanba",
//     payshanba = "Payshanba",
//     juma = "Juma",
//     shanba = "Shanba",
//     yakshanba = "Yakshanba"
// }
// console.log(Kunlar.dushanba);
// console.log(Kunlar.yakshanba);
//19-mashq
// enum Mavsum {
//     Qish = "qish",
//     Bahor = "bahor",
//     Yoz = "yoz",
//     Kuz = "kuz"
// }
// function res(n: Mavsum) {
//     if (n=='qish') {
//         console.log('qish');
//     }
//     if (n=='yoz') {
//         console.log('yoz');
//     }
//     if (n=='bahor') {
//         console.log('bahor');
//     }
//     if (n=='kuz') {
//         console.log('kuz');
//     }
// }
// res(Mavsum.Bahor);
// res(Mavsum.Kuz);
//21-mashq
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// const user1: User = {
//   id: 1,
//   name: "abdulaziz_dev",
//   email: "test@gmail.com",
// };
// console.log(user1);
//22-mashq
// type User = {
//     with: number
//     height:number
// };
// const user1: User = {
//     with: 5,
//     height:6
// };
// function res(w:any,h:any) {
//     return w*h
// }
// console.log(res(user1.with,user1.height));
//24-mashq
// function test(a:any,n:any) {
//     return a+n
// }
// console.log(test(1,2));
//25-mashq
// function str(n: string):string {
//     return n.split('').reverse().join('')
// }
// console.log(str('hello'));
//26-mashq
// let arr=[1,2,3,4,5,6,7,8,9]
// function test(n: number[]):number {
//     let res:number=0
//      n.forEach((value) => {
//          res+=value
//     })
//     return res/n.length
// }
// console.log(test(arr));
//27-mashq
// let str: string[] = ["salom", "hello", "privet"];
// function res(n: string[]): string {
//   let sum: string = "";
//   n.forEach((v) => {
//     if (n.length > sum.length) {
//       sum = v;
//     }
//   });
//   return sum;
// }
// console.log(res(str));
