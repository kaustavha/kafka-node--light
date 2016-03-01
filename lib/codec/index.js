'use strict';

var zlib = require('zlib');

var gzipCodec = {
    encode: zlib.gzip,
    decode: zlib.gunzip
};

var codecs = [
    null,
    gzipCodec
];

function getCodec(attributes) {
    return codecs[parseInt(attributes, 10)] || null;
}

module.exports = getCodec;
