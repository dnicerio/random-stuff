function exam() {
  let n = 5;
  
  
  

  for(let i = 1; i < n; i++) {
    for(let j = 1; j < n - 1; j++) {
      console.log("")
    }
    for(let k = 1; k < i; k++) {
      console.log("X")
    }
    console.log("\n")
  }
}

exam()