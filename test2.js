function exam() {
  let i = 0;

  while(i < 10) {
    i = i + 1;
    console.log(i);

    if(2 * i == i + i) {
      break;
    }
  }
}

exam();