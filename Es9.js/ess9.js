//ES9 Feature :

//Async iterators
//Object rest properties
//Object spread properties
//Promise.prototype.finally


//ProgramOfAsync

function asyncIterator() {
    const array = [1, 2];
    return {
      next: function() {
        if (array.length) {
          return Promise.resolve({
            value: array.shift(),
            done: false
          });
        } else {
          return Promise.resolve({
            done: true
          });
        }
      }
    };
  }
  
  var iterator = asyncIterator();
  
  (async function() {
      await iterator.next().then(console.log); // { value: 1, done: false }
      await iterator.next().then(console.log); // { value: 2, done: false }
      await iterator.next().then(console.log); // { done: true }
  })();


  //ObjecrRestProperty

  let { fname, lname, ...rest } = { fname: "Saurabh", lname: "HM", location: "Earth", type: "Human" };
fname; //"Saurabh"
lname; //"HM"
rest; // {location: "Earth", type: "Human"}


//Object spread properties

let info = {fname, lname, ...rest};

info; // { fname: "Saurabh", lname: "HM", location: "Earth", type: "Human" }



//Promise prototype finally

function testFinally() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFinally().then(() => console.debug("resolved")).finally(() => console.debug("finally"))
  // resolved
  // finally