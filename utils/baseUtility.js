export default class baseUtility {
    constructor(page) {
        this.page = page;
    }

    async createRandomString(stringLength) {
        var random_string = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        for (var i, i = 0; i < stringLength; i++) {
            random_string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return random_string;
    }
}
