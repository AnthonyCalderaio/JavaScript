console.log("---------------------Items---------------------"  )

const items = [
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4}
  ];
  console.log(items + "\n")
  

  console.log("------Map Result: names only")
  const mapResult = items.map((x) => x.name )
   
  console.log(mapResult +"\n")


  console.log("------Filter Result: with points >=3")
  const filterResult = items.filter(function(val){
        return val.points >= 3
  })
  console.log(filterResult)
  console.log("\n")
  

  console.log("------Reduce Result: summing all points")
  const reduceResult = 
  items.map(function(b){return b.points})
  .reduce(function(p,c){return p + c})
  console.log(reduceResult+"\n")
