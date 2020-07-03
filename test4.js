function exam() {
  let s = "HelloWorld!!!=)";
  let i = 0;

  while(i + 1 < s.length) {
    if(s.charAt(i) != s.charAt(i + 1)) {
      console.log(s.charAt(i))
    }
    i = i + 1;
  }
}

exam()