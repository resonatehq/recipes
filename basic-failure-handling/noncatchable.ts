import { Resonate } from "@resonatehq/sdk";

// instantiate resonate
// this time will will increase the timeout
const resonate = new Resonate({
  url: "http://localhost:8001",
  timeout: 60000,
});

// register a function with resonate
resonate.register("foo", () => {
  // try something that might fail
  console.log("trying...");

  // simulate unexpected failure
  if (Math.random() > 0.5) {
    console.log("!!! ERROR !!!");
    process.exit(1);
  }
  
  console.log("success!")
});

// start resonate, this will enable restart with resume semantics
// we are overriding the default polling frequency for demo purposes
resonate.start(100);

async function main() {
  const id = "foo.1";

  // lazily run foo
  const promise = await resonate.promises.get(id).catch(() => null);
  if (!promise) {
    resonate.run("foo", id);
  }
}

main();
