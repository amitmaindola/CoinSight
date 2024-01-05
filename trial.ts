type FirstType = { a: number };
type SecondType = { b: string };
let combined: FirstType & SecondType = {
    a: 10,
    b: "amit"
};

console.log(combined)