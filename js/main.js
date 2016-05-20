function pow(base,exp){
var result = 1;
for(var cnt = 0; cnt < exp; cnt++){
result *= base };
return result;
}
module.exports.pow = pow;

