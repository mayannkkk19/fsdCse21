function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Test1");
      resolve({ status: "success" });
    }, 4000);
  });
}

function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Test2");
      reject({ status: "failed" });
    }, 1000);
  });
}

async function test () {
    try {
        await f1();
        await f2();
    } catch (e) {
        console.log("Error", e);
    }
}

test();