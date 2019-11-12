const obj = {}
obj.AS = 'ASD'
const s1 = Symbol( 'AS' );
const s2 = Symbol('AS')
obj[s1] = 'ASD';
obj[s2] = 'ASDs'
console.log((obj[Symbol('AS')]))