# Basic Coordination

**Problem**

Two processes require coordination.

**Solution**

Use a Durable Promise as a synchronization barrier. One process creates and awaits a promise, one process resolves a promise.

## Install
```
npm install
```

You will also need to install the Resonate Server. This can be installed with Homebrew or [downloaded from GitHub](https://github.com/resonatehq/resonate/releases/tag/v0.5.1).
```
brew install resonatehq/tap/resonate
```

## Run
```
resonate serve

npm run foo
npm run bar
```
