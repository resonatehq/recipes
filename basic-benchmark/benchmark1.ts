async function bar(): Promise<number> {
    return 0;
}
  
async function foo(n: number): Promise<void> {
    for (let i = 0; i < n; i++) {
        await bar();
    }
}

console.time('runtime')
foo(10).then(() => console.timeEnd('runtime'));