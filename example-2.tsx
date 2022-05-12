export const getDeepValue = <
  TObj,
  FirstKey extends keyof TObj,
  SecondKey extends keyof TObj[FirstKey]
>(
  obj: TObj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: '12',
    d: 18,
  },
}

const value = getDeepValue(obj, 'foo', 'a')
