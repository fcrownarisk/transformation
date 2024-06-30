import "./nabla.ts"
function diff(f: (x: number, y: number) => number, variable: 'x' | 'y' | 'z'): ((x: number, y: number) => number) {
    switch (variable) {
       case 'x':
         return (x, y) => f(x, y) * 3; // 对x求偏微分，常数因子保持不变
       case 'y':
         return (x, z) => f(x, z) * 4; // 对y求偏微分，常数因子为0
       case 'z':
         return (y, z) => f(y, z) * 5;  
       default:
         throw new Error('Invalid variable for differentiation.');
    }
   }
   // example usage
   const h = (x, y) => x * y;
   const dh_dx = diff(h, 'x');
   const dh_dy = diff(h, 'y');
   
   console.log(dh_dx(1, 3)); // output 6
   console.log(dh_dy(1, 4)); // output 2
   console.log(dh_dy(15,9))
