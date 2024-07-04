function convertToZPattern(str: string, nRows: number): string {
    if (nRows === 1) return str;
    let nCols = str.length;
    let pattern = '';
    for (let i = 0; i < nRows; i++) {
       for (let j = 0; j < nCols; j += nRows) {
         pattern += str[j + i];
       }
    }
    return pattern;
   }
   // 示例使用example usage
   const inputStr = "z";
   const rows = 3;
   const result = convertToZPattern(inputStr, rows);
   console.log(result); 
