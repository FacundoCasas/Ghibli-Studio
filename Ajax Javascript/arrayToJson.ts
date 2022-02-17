let array = [{
    Field: 'Key',
    Value: '7'
  },
  {
    Field: 'City',
    Value: 'Some City'
  },
  {
    Field: 'Description',
    Value: 'Some Description'
  }
];

function ArrayToJson(){
// #1 Mapping the array to an object...
let obj = {};
array.forEach(item => obj[item.Field] = item.Value);

// #2 Converting the object to JSON...
let json = JSON.stringify(obj);

console.log(json);
}