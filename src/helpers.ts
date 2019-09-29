export function getGreeting(greetingMessage: string) {
    return greetingMessage;
}

export function getAppInfo() {
    const appInfo = {
        version: "0.0.1"
    };
    return appInfo;
}

export function getStaticUsers() {
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