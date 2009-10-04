exports.testString = require("./string-tests");
exports.testURI = require("./uri-tests");

exports.testServerJS = require("./serverjs/all-tests");

if (require.main === module.id)
    require("os").exit(require("test/runner").run(exports));
