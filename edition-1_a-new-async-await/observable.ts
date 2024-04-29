import { Resonate, Retry } from "@resonatehq/sdk";

// instantiate resonate
const resonate = new Resonate();

// register a function with resonate
resonate.register("foo", async () => {
  // try something that might fail
  console.log("trying...");

  // simulate an exception
  if (Math.random() > 0.5) {
    throw new Error("!!! ERROR !!!");
  }

  console.log("success!");
});

resonate.run("foo", "foo.1", resonate.options({
  retry: Retry.exponential()
}));
