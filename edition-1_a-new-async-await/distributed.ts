import { Resonate, Context } from "@resonatehq/sdk";

// instantiate resonate
const resonate = new Resonate({
  url: "http://localhost:8001",
  timeout: 60000,
});

// register a function with resonate
resonate.register("foo", async (ctx: Context) => {
  console.log("trying...");

  // wait on a remote promise
  const r = await ctx.run("remote");
  console.log(r);
});

resonate.run("foo", "foo.1");
