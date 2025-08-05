

export function prettyCost(cent){

  if(!cent || typeof cent !== 'number'){
    return "0,00 $"
  }

  return (`${(cent/100).toFixed(2)} $`).replace(".", ",");


}