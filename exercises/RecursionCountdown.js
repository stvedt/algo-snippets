function countdown(num) {
  if (num <= 0) {
    console.log("complete");
    return;
  }
  console.log(num);
  countdown(num - 1);
}

countdown(5);
