
console.log('person 1 : 1st tickets ');
console.log('person 2 : 2nd tickets ');

const premovie = async () => {

    const PromiseWifeBringingtickets = new Promise((resolve,reject)=> {
        setTimeout(()=> {  resolve('3rd ticket') },3000)
    })
    const getpopcorn= new Promise((resolve,reject)=> resolve(" CHEESSY POPCORN"))
    const getbutter= new Promise((resolve,reject)=> resolve(" CHESSY BUTTER"))
    const getColdDrinks = new Promise((resolve,reject)=> resolve(" BLACK COLDDRINK"))


    let ticket = await PromiseWifeBringingtickets;
    console.log("HUSBAND : we should go in ");
    console.log("WIFE : no i am hungry ");
    console.log("HUSBAND : i am going to bring popcorns ")

    let popcorn = await getpopcorn;
    console.log(` TAKE : ${popcorn}` )
    console.log("HUSBAND : we should go in ");
    console.log("WIFE : no i need a butter ");
    console.log("HUSBAND : i am going to bring butter ")

    let butter =await getbutter;
    console.log(` TAKE : ${butter}` )
    console.log("HUSBAND : we should go in ");
    console.log("WIFE :  i want colddrink ");
    console.log("HUSBAND : i am going to bring colddrink ");

    let colddrink =await getColdDrinks;
    console.log(` TAKE : ${colddrink}` )
    console.log("WIFE : BABY LET'S GO TOGETHER ");
    
    return ticket
    
}

premovie().then((m)=> console.log(`PERSON 3 : ${m}`))



console.log('person 4 : 4th tickets ');
console.log('person 5 : 5th tickets ');