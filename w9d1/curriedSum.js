function curriedSum(numArgs){
    let numbers = [];
    function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs) {
            let total = 0;
            numbers.forEach((n) => { total += n; });
            return total;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this;
    function _curriedThat(arg) {
      args.push(arg);
      if (args.length === numArgs) {
        return that(...args);
      } else {
        return _curriedThat;
      }
    }
    return _curriedThat;
};
  