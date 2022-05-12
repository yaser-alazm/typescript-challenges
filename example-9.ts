export const deepEqualCompare = <Arg>(
    a: Arg extends any[] ? `Don't pass any array!` : Arg,
    b: Arg
  ): boolean => {
    return a === b;
  };

// OK
const res = deepEqualCompare('a','b')
// TS err
//const res2 = deepEqualCompare([],'a')
