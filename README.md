# Generating an Axios client using `openapi-typescript-codegen`

Small PoC to try out how does the `openapi-typescript-codegen` package would work in conjunction with Parcel.

https://github.com/ferdikoomen/openapi-typescript-codegen/blob/master/docs/axios-support.md

## Things I learned
- Parcel still needs to be configured to work with this library.
  - It was necessary to install `@types/node`
  - It was necessary to move `form-data` as a `dependency` instead of a `devDependency`. This is the contrary of what the official documentation of `openapi-typescript-codegen` suggests [here](https://github.com/ferdikoomen/openapi-typescript-codegen/blob/master/docs/axios-support.md#axios-support)
  - it was necessary to create a `tsconfig.json` file to fix more Types issues when building the library
- Parcel is a really cool option, it almost "just works" out of the box
  - Maybe the combination of `Parcel` + `openapi-typescript-codegen` doesn't work _that well_
  - it caches the build, so if I don't change anything the build is almost instant.
- We can the generate step using a npm script.

## What needs further investigation?
- How do I consume this library?
- Would this work if I list `form-data` and `axios` as peerDependencies?
