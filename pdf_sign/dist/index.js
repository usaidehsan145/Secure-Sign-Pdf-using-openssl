"use strict";

var _SignPDF = _interopRequireDefault(require("./SignPDF"));

var _nodeFs = _interopRequireDefault(require("node:fs"));

var _nodePath = _interopRequireDefault(require("node:path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  const pdfBuffer = new _SignPDF.default(_nodePath.default.resolve('test_assets/attorney.pdf'), _nodePath.default.resolve('test_assets/keystore.p12'));
  const signedDocs = await pdfBuffer.signPDF();
  const randomNumber = Math.floor(Math.random() * 5000);
  const pdfName = `./exports/Signedfile_${randomNumber}.pdf`;

  _nodeFs.default.writeFileSync(pdfName, signedDocs);

  console.log(`New Signed PDF created called: ${pdfName}`);
}

main();