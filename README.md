# Build Version

This action generates a build version usable by `npm version`.

## Usage

### Inputs

* `path` - (Optional)
    * Path to the `package.json` file to use
    * Defaults to current directory

* `separator` - (Optional)
    * Separator to use between product version and build number
    * Defaults to `-`

### Outputs

* `version` - The generated build version

### Example workflow

```yaml
name: Build Version

on: push

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
        - uses: clintonelec/gha-build-version@v1
          id: build_version

        - run: echo ${{ steps.build_version.outputs.version }}
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)