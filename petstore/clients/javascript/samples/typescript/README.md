# client library samples for TypeScript 

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Run server with [.NET SDK 9.0](https://dotnet.microsoft.com/en-us/download/dotnet/9.0).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html). Install the TypeScript compiler using:


```bash
npm install -g typescript
```

## Setup

To run the samples using the grenerate code:

1. Build grenerate code in the `petstore/clients/javascript` folder:

```bash
npm install && npm run build
```
2. Install the dependencies using `npm`:

```bash
npm install
```
2. Compile the samples:

```bash
npm run build
```

3. Change path to `petstore/servers/aspnet` and run the server.

```bash
dotnet run
```

4. Run samples you like :

```bash
node dist/petOperations.js
```

