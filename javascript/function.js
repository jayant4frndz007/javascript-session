
// function add(num1,num2){
//     console.log('sum of two numbers= '+(num1+num2));
// }

// add(5,4);

//call
// function details(data,dat2){
//      console.log('call',data, this.name);
// }
// const data={
//     name:'Sandhu',
//     address:'canada',
//     age:'24'
// }

// details.call(data,'male','abc');

//apply
// function details(data,data2){
//     console.log('call',data, this.name);
// }
// const data={
//    name:'Sandhu',
//    address:'canada',
//    age:'24'
// }

// details.apply(data,['male','abc']);

//bind

// function checkNumberIsGreaterThan10(num){

//     if(num > 10){
//         //console.log('Greater');
//         return 'Greater';
//     }
//     if(num < 10){
//         //console.log('smaller');
//         return 'smaller';
//     }
//     if(num == 10){
//        // console.log('same')
//         return 'same';
//     }

// }

// let check = checkNumberIsGreaterThan10(12);

// if(check == 'Greater'){
//     console.log('I am happy')
// }
// if(check == 'smaller'){
//     console.log('I am less happy')
// }
// if(check == 'same'){
//     console.log('ok ok')
// }

// concept of ==  and ===

console.log(5 == '5');
console.log(5 === '5');


