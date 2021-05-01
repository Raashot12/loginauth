import React from "react";

export const Reducers = () => {
  let programmers = ["Reed", "John", "Jane", "Iskilu", "Mistura"];
  //  programmers.reduce((acc, programy)=>{
  //      if(programy.startsWith("J")){
  //         return acc.concat(programy)
  //      }else{
  //          return acc
  //      }
  // },[])

  return (
    <div>
      <ul>
        {programmers
          .reduce((acc, programmer) => {
            if (programmer.startsWith("J") === true) {
              return acc.concat(programmer);
            } else {
              return acc;
            }
          }, [])
          .map((programmer) => {
            return <li>{programmer}</li>;
          })}
      </ul>
    </div>
  );
};

// const name = {
//     rasheed: "Rasheed",
//   }

//   function sayName(){
//     console.log(this.rasheed)
//   }
//   cosnt anwer =sayName.bind(name)
//   console.log(anwer())

// const dummyLookup = {};

// function dummy(a, b, c) {
//   const key = `${a} - ${b} -${c}`;

//   if (key in dummyLookup) {
//     return dummyLookup[key];
//   } else {
//     console.log("nothing was found");
//   }
//   const result = a + b + c;
//   dummyLookup[key] = result;
//   return result;
// }
// dummy("Rasheed", "Iskilu", "Akanni");
// console.log(dummyLookup);

// const arr = [1, 2, 4, 5, 6, 7];
// const answer = arr.map((ar) => ar * 2);
// console.log(answer);

const foo = () => console.log("Iskilu");
foo();

function memoize(f) {
  const cacheLookup = {}; // Value cache stored in the closure
  return function () {
    const key = Array.prototype.join.call(arguments, "-");
    if (key in cacheLookup) {
      return cacheLookup[key];
    } else {
      return (cacheLookup[key] = f.apply(this, arguments));
    }
  };
}

function dummy(a, b, c) {
  console.log("computing...");
  return a + b + c;
}
const memoizedDummy = memoize(dummy);
memoizedDummy(1, 2, 3);
memoizedDummy(1, 2, 3);

// Read Call , Apply and Bind
const arr = [1, 2, 4, 5, 6, 7].join("-");
console.log(arr);
const answer = arr.map((ar) => ar.join("/"));
console.log(answer);

function calc(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + calc(n - 1);
  }
}
calc(4);
