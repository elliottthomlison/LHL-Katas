class Bill{
  constructor (name, value, count){
    this.name = name;
    this.value = value,
    this.count = count;
  }
  getValue() {
    return this.value;
  }
  getName() {
    return this.name;
  }
  getCount() {
    return this.count;
  }
  addCount(num) {
    this.count += num;
    return this.count;
  }
  getChange(){
    return `${this.name}: ${this.count}`
  }
}

const calculateChange = function(totalCost, cashToReturn) {
  let change = cashToReturn - totalCost;
  let allChange = '{';
  let giveBack = [
    new Bill('Twenty dollars', 2000, 0),
    new Bill('Ten dollars', 1000, 0),
    new Bill('Five dollars', 500, 0),
    new Bill('Two dollars', 200, 0),
    new Bill('One dollar', 100, 0),
    new Bill('Quarter', 25, 0),
    new Bill('Dime', 10, 0),
    new Bill('Nickel', 5, 0),
    new Bill('Penny', 1, 0),
  ];
  giveBack.forEach((bill)=>{
    if(change % bill.getValue() !== change){ 
      let billCount = Math.floor((change/bill.getValue()));
      change %= bill.getValue();
      bill.addCount(billCount);
      allChange += (bill.getChange() + ', ');
      
    }
  });
  allChange = allChange.substring(0,allChange.length-2);
  return allChange + ' }';
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

