function counter(){
    let counter=0;
    return function(){
         return counter++;
    }
}
const add= counter();
add();
add();
add();

function p2(){
    console.log("this is p2 here");
    
}

console.log("This is my practice work that m performing")
//adding more data from practce branch

// hello from practice