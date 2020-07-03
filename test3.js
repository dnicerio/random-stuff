function exam() {
  let x = 1000;

  while(x > 0) {
    console.log(x % 10);
    x = Math.floor(x / 10);
  }
}

exam();
