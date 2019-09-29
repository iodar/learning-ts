"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getGreeting(greetingMessage) {
    return greetingMessage;
}
exports.getGreeting = getGreeting;
function getAppInfo() {
    const appInfo = {
        version: "0.0.1"
    };
    return appInfo;
}
exports.getAppInfo = getAppInfo;
function getStaticUsers() {
    const users = {
        users: [
            {
                age: 28,
                firstName: "Peter",
                lastName: "Müller"
            },
            {
                age: 57,
                firstName: "Ute",
                lastName: "Beierburg"
            }
        ]
    };
    return users;
}
exports.getStaticUsers = getStaticUsers;
//# sourceMappingURL=helpers.js.map