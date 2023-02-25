const bucket = ["vegetables", "rice", "chips", "potato"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") &&
    bucket.includes("potato")
  ) {
    resolve("Fried Rice");
  } else {
    reject("Can't cook it");
  }
});

friedRicePromise
  .then((data) => {
    console.log(`let's it ${data}.`);
  })
  .catch((err) => console.log(err));
