# Reproduction for [angular/angular-cli#15403](https://github.com/angular/angular-cli/issues/15403)

Steps to reproduce:

- `yarn` (or `npm i`)
- `cd node_modules && ln -s ../test-schematics test-schematics`
- `yarn ng generate test-schematics:repro`

You'll see the new project was correctly added to the angular workspace but the target
didn't get registered.
