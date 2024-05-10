# Basic Benchmark

This recipe shows how to run three different benchmarks to evaluate the performance of Resonate.

## Install

```
npm install
```

You will also need to install the Resonate Server. This can be installed with Homebrew or [downloaded from GitHub](https://github.com/resonatehq/resonate/releases).

```
brew install resonatehq/tap/resonate
```

# Benchmark 1 • Baseline

This benchmark is a simple asynchronous loop to establish a baseline.

```
npm run benchmark1 
```

# Benchmark 2 • Resonate SDK

This benchmark is a simple asynchronous loop using the Resonate SDK.

```
npm run benchmark2
```

# Benchmark 3 • Resonate SDK & Resonate Server

This benchmark is a simple asynchronous loop using the Resonate SDK and the Resonate Server.

Start the server

```
resonate serve
```

Run the benchmark

```
npm run benchmark3
```

Remember if you want to rerun the benchmark to either change the id of the run or reset the resonate database