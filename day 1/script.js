// let a="hi";
// let b="there";

// console.log(a,b);
// console.log(a+" "+b);
// console.log("hi there");
// console.log(`${a} ${b}`);

// let c=45, d=5;
// console.log(c+d);
// console.log(c-d);
// console.log(c*d);
// console.log(c/d);
// console.log(c%d);

// let e=455, f=50;
// console.log(e>f);
// console.log(e<f);
// console.log(e==f);
// console.log(e===f);
// console.log(e!=f);

// if(2 !=2){
//     console.log("equal")
// }else{
//     console.log("not equal")
// }



// let num=prompt("enter a number");

// if(num%2==0){
//     console.log("the number is even")
// }
// else{
//     console.log("the number is odd")
// }

//using if inside if

// let num=Number(prompt("enter a number"));
// let ber=Number(prompt("enter another number"));
// let sum=num+ber;
// if(sum>20){
//     if(sum%2==0){
//         console.log("greater and even")
//     }
// }
// else{
//     console.log("condition not satisfied")
//     }




// let num=Number(prompt("Enter a number"));

// if (num>10 && num<20)
// {
//     console.log(num*2);
// }
// else{
//     console.log("not in range");
// }



// let age=Number(prompt("Enter age"));
// let price=0;
// let cam=0;
// if (age<40){
//  if (age>18)
// { 
//     price=10
//     let ask= prompt("camera required: yes or no");
//      if(cam=='yes'){
//         price+=3;}
//     console.log("your price to be paid is ", price);
// }
// else if (age>12)
// {
//     price=5
    
//     let ask= prompt("camera required: yes or no");
//     if(cam=='yes'){
//         price+=3;}
//     console.log("your price to be paid is ",price+=5);
// }else{
//     let charge=15;
//     price+=charge;
// }

// }
// else (age>40)
//     {
//         console.log("you r not allowed, sorry! as u r very old");
//     }

// let discount=price*0.18;
// price=price-discount;
// console.log("price after applying discount is:",price);


// for(let a=0;a<10;a++){
// console.log(a);
// }


// let a=[];
// let index=0;
// for(let i=1; i<=10;i++){
//     if (i%2==0){
//     //    a[a.length]=i;
//      a[index]=i;
//      index++;
//     }
// }
// console.log(a)


// let a=[];
// for(let i=0; i<10;i++){
//     {
//        a[i]=i+1;
//     }
// }
// console.log(a)



// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i,j);
// }
// }


// for(let i=1;i<=5;i++){
//    for(j=0;j<i;j++){
//     console.log(i);
//    }
// }
// console.log(" ");

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }



// let i=1;
// let sum=0;
// while(i<=1000){
//     if(i%2==0){
//     sum+=i;
    
//     }
//     i++
// }
// console.log(sum);


// let str='meet';
// for(i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// let str = 'meet';
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i++;
// }


// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// };
// //console.log(obj["a"]);
// for(key in obj){
//     console.log(obj[key]);
// }


// do{
//     console.log("hi");
// } while(2>4);

// function CheckEven1(n){
//     //console.log("even");
//     if (n%2==0){
//         console.log("even")
//     } else{
//         console.log("odd")
//     }
// }
// CheckEven1(72);



// const CheckEven2=function(n){
//     if (n%2==0){
//         console.log("even")
//     } else{
//         console.log("odd")
//     }
// }

// CheckEven2(8);




// const CheckEven3=(n)=>{
//     if (n%2==0){
//         console.log("even")
//     } else{
//         console.log("odd")
//     }
// }
// CheckEven3(10);


// let a=Number(prompt("enter a number"));
// let b=Number(prompt("enter another number"));
// function total(a,b){
//     let sum=0;
//     for (let i=a;i<=b;i++){
//         sum+=i;
// }
// console.log(sum);
// }
// total(a,b);


function outer(){
    let a=2;
    let b=2;
    function inner(){
        let c=3;
        console.log("a",a);

    }
    inner();
    console.log("c",c);
}
outer();










