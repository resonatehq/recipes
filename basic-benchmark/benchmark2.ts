import { Resonate, Context } from "@resonatehq/sdk";

// instantiate resonate
const resonate = new Resonate();

async function bar(c : Context): Promise<number> {
    return 0;
}
  
async function foo(c : Context, n: number): Promise<void> {
    for (let i = 0; i < n; i++) {
        await c.run(bar);
    }
}

resonate.register("foo", foo);

console.time('runtime')
resonate.run("foo", "foo.1", 10).then(() => console.timeEnd('runtime'));