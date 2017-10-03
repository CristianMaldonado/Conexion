
/*{
"header":{
},
"data":{"id":"comexusr","password":"bp200108bkb"}
}
 */

import { Data } from "../bean/bean.data";

export class User extends Data {

    constructor(private id: string, private password: string) {
        super();
    }

}