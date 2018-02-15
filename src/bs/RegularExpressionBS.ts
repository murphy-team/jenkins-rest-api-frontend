
export class RegularExpressionBS {

    public constructor() {}

    public testRegularExpresion(gitUrl) {
        const re = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g);
        let isAccepted = re.test(gitUrl);

        return isAccepted;
    }

}