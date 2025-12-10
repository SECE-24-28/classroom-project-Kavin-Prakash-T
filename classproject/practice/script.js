// function add(a,b){
//     return a+b
// }
//  console.log(add(10,20))

//  var sub = function(a,b){
//     return a-b
//  }
//  console.log(sub(10,5))

//  ES6 feature ECMA Script 6(2015)
//  var sub = (a,b)=>{
//     return a-b
//  }
//  console.log(sub(10,5))

//   var sub = (a,b)=>a-b

//  console.log(sub(10,5))

//   var sub = a=>a+10

//  console.log(sub(10))

//  for(let i=1;i<=5;i++){
//    console.log("Number:",i)
//  }

//  for(let i=2;i<=20;i+=2){
//    console.log("Even Number:",i)
//  }

//    let j=2
//    while(j<=20){
//       console.log(j)
//       j+=2
//    }

// var arr=['Kavin',111,'24CS111']
// console.log(arr[0]);
// console.log(arr.length)

// var arr1 = new Array(1,2,3,4,5)

// for(let i=0;i<arr1.length;i++){
//    console.log("Number:",arr1[i])
// }

// console.log(arr1)
// arr1.push('d')
// arr1.unshift('k')
// console.log(arr1)
// arr1.pop()
// arr1.shift()
// console.log(arr1)

// function a(arg){
//    console.log("Inside function a");
//    arg(b)
// }
// function b(){
//    console.log("Inside function b");
// }

// a(b)

// A function which is passed as an argument to another function is called as callback function
// function a(arg,a,b){
//    console.log("Inside function a",a);
//    arg(b)
// }
// function b(b){
//    console.log("Inside function b",b);
// }

// a(b,10,20)

// function multiplyBy(factor){
//    return function(number){
//       return number* factor;
//    }
// }

// const multiplyBy2=multiplyBy(2);
// const multiplyBy4=multiplyBy(4);

// console.log(multiplyBy2(10))
// console.log(multiplyBy4(20))

// const arr=[1,2,3,4,5]

// arr.forEach(el=>console.log("el=>",el))

// const newArr=[]

// arr.forEach(el=>newArr.push(el*2))

// console.log(newArr)

//const arr=[1,2,3,4,5]
//map is used to transform array elements
//const res=arr.map(el=>el*3)
//const res=arr.filter(el => !(el%2))
//or
//const res=arr.filter(el => el%2==0)
// const arr=[10,20,'J',30,'A','V','A']
// const res=arr.filter(el=>typeof el ==="number")
// console.log(res)

// const arr=[10,false,1.2,-0.7,null,'',undefined,'Hello',true]

// const res= arr.filter(el=>el)
// console.log(res)

// const firstName="John"
// const lastName="Smith"
// const fullName=firstName + lastName
// const fullName=firstName +' '+ lastName
// const fullName=`Full Name is ${firstName} ${lastName}`
// console.log(fullName)

// let str = "Hello World"
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.substring(0,7))
// console.log(str.split(" "))
// console.log(str.replace("World","Javascript"))

// const countWords=str=>{
//    const words=str.split(" ");
//    return words.length
// }

// console.log(countWords("The quick brown fox"));

// let person={
//    name:"John",
//    age:25,
//    isStudent:true
// };

// const variable="name";
// console.log(person.age)
// console.log(person[variable])

// let person={
//    name:"John",
//    age:25
// };

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// const marks={
//    math:90,
//    science:80,
//    english:70
// }

// for(let  i=0;i<Object.keys(marks).length;i++){
//    console.log(Object.keys(marks)[i]+"=>"+Object.values(marks)[i])
// }

// Object.keys(marks).forEach(key=>console.log(`${key} => ${marks[key]}`))

// let students=[
//    {name:"John",age:20,grade:9},
//    {name:"Emma",age:21,grade:8.5},
//    {name:"Mike",age:19,grade:7.5},
// ]

// students.forEach(st=>console.log(`${st["name"]} is ${st["age"]} years old`))
// const ans=students.filter(st=>st.grade>8).map(st=>st.name)
// console.log(ans.toString())
// console.log("Student with grade greater than 8:",`${ans.join(" ")}`)

// const arr=[1,2,3,4,5]
// const [a,b,c]=arr
//const [a,b,...rest]=arr
//const [...rest,a,b]=arr
//const[a,,b]=arr
//spread operator work right
//rest operator work left
//const newArr=[1,2,...arr]
// console.log(newArr)

// const obj={
//     name:"John",
//     age:30,
//     height:70,
//     weight:65
// }

// const {name,age,weight:w}=obj //alias name
// console.log(w)
// console.log(weight)
// console.log(mark)
//  const {age,name,...rest}=obj
//  const {...rest,age,name}=obj
//  console.log(age)
// console.log(rest)
// console.log(rest.name)
// console.log(rest.height)

//default value
// const {name,age,w=86}=obj
// const {name,age,weight=86}=obj
// console.log(weight)

//import print,{add,sub,NUM} from "./math.js"
// import print from "./math.js"
// import {mul,div} from "./math.js"

// print(mul(3,4))
// print(div(4,5))
// print(23)
// console.log(add(10,20))
// console.log(NUM)
// console.log(sub(30,10))

// const name='Tony'
// const age=20
// var height;
// const obj={
//     name,age,height
// }
//This is Equal to
// const obj={
//     name:name,
//     age,
//     height:height
// }
// console.log(obj)

// let a;
// var b;
// //c;
// //const d;
// console.log(a)

// console.log("Start")
// setTimeout(()=>{
//     console.log("Inside");
// },3000)
// console.log("End")

// let a=9
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(a%2==0)
//        resolve("It is even")
//     else
//         reject("It is odd")
//     },3000)
// })

// p1.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log("Error",err)
// })

// console.log(p1)/

// const checkEven = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a % 2 == 0) resolve("It is even");
//       else reject("It is odd");
//     }, 3000);
//   });
// };

// const checkLessThan10 = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a < 10) resolve("It is less than 10");
//       else reject("It is not less than 10");
//     }, 3000);
//   });
// };

//promise chaining
// let num =12
// checkEven(num).then((result)=>{
//     console.log(result)
//     checkLessThan10(num).then((res) => {//This is not a good way
//     console.log(res)
// })
//     .catch((err) => {
//         console.log("Error:", err)
//     })
// }).catch((err)=>{
//     console.log("Error",err)
// })

// let num = 12
// checkEven(num).then((result) => {
//     console.log(result)
//     return checkLessThan10(num)
// })
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log("Error", err)
//     })

// let num = 7;
// checkEven(num)
//   .then((result) => {
//     console.log(result);
//     return checkLessThan10(num);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//     return checkLessThan10(num);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// const checkConditions =async()=>{
//       let a=10;
//       console.log("STARTING>>>>>>>>>>>>>>>>>>>>")
//       try{
//       const res=await checkEven(a)
//       console.log("Result:",res);
//       const res2=await checkLessThan10(a)
//       console.log(res2)
//       }catch(err){
//         console.log("Error:",err);
//       }
//       finally{
//         console.log("Process completed")
//       }
// }
// checkConditions();

// const checkConditions =async()=>{
//       let a=10;
//       console.log("STARTING>>>>>>>>>>>>>>>>>>>>")
//       try{
//       const res=await checkEven(a)
//       console.log("Result:",res);
//       }catch(err){
//         console.log("Error:",err)
//       }
//       try{
//       const res2=await checkLessThan10(a)
//       console.log(res2)
//       }catch(err){
//         console.log("Error:",err);
//       }
//       finally{
//         console.log("Process completed")
//       }
// }
// checkConditions();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>{
//     console.log(res)
//     return res.json();
// }).then(json=>{
//     console.log(json);
// }).catch(err=>{
//     console.log("Error:",err)
// })

const numberElement=document.getElementById("number");

const incBtn=document.getElementById("increment");
const decBtn=document.getElementById("decrement");

incBtn.addEventListener('click',()=>{
    let value=Number(numberElement.textContent)
    numberElement.innerHTML=value+1
    fetchData()
})

decBtn.addEventListener('click',()=>{
    let value=Number(numberElement.textContent)
    numberElement.innerHTML=value-1
    fetchData()
})

const resetBtn=document.getElementById("reset")

// resetBtn.addEventListener('click',()=>{
//     numberElement.innerHTML=0
// })


const fetchData = async () => {
    document.getElementById('details').innerHTML=`<div class="text-center">Loading</div>`
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${numberElement.innerHTML}`);
    const data = await res.json();
    console.log(data);
    document.getElementById('details').innerHTML=`
    <div><strong>Name:</strong>${data.name}</div>
    <div><strong>Email:</strong>${data.email}</div>
    <div><strong>Phone:</strong>${data.phone}</div>
    <div><strong>Website:</strong>${data.website}</div>
    <div><strong>Company Name:</strong>${data.company.name}</div>
    <div><strong>Address:</strong>${data.address.street},${data.address.suite},${data.address.city}</div>
    `
  } catch (err) {
    console.log("Error:", err);
    document.getElementById('details').innerHTML=`<div class="text-center">Data Not Found</div>`
  }
};
fetchData();
