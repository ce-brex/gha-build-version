const core = require("@actions/core");
const semverCoerce = require("semver/functions/coerce");
const semverValid = require("semver/functions/valid");
const fs = require("fs");
const { join } = require("path");
const { generate } = require("build-number-generator");

try {
    const path = core.getInput("path");
    const packageJson = fs.readFileSync(join(path, "package.json")).toString();
    const packageVersion = JSON.parse(packageJson).version;
    const separator = core.getInput("separator");

    const version = semverValid(semverCoerce(packageVersion));

    const buildVersion = generate({
        version: version,
        versionSeparator: separator,
    });

    core.info(`Package Version: ${ packageVersion }`);
    core.info(`Build Version: ${ buildVersion }`);

    core.setOutput("version", buildVersion);
} catch (err) {
    core.setFailed(err.message);
}
