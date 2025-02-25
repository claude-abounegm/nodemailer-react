"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const server_1 = require("react-dom/server");
function renderBody(body) {
    const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" ' +
        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
    return doctype + server_1.renderToStaticMarkup(body);
}
function default_1(config, emails) {
    const { transport: transportConfig, defaults } = config;
    const transport = nodemailer_1.createTransport(transportConfig, defaults);
    return {
        transport,
        send(template, props, message) {
            const { subject, body } = emails[template](props);
            return transport.sendMail(Object.assign({ subject, html: renderBody(body) }, message));
        },
    };
}
exports.default = default_1;
