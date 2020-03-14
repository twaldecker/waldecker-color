import moment from 'moment'
import { Cat, Dog as D } from 'shelter'


interface Bar {

}

export class Foo {
    public paramFunc (param: string) {
        console.log('test' + param)
    }

    public static staticProp = "test"

    public static staticFunc() {
        Cat.meow()
        D.woof()
        console.log("aaaaa")
    }
}

export default { x: "123"}

export class TheClass extends Foo implements Bar {
    public x: number
    public y: string
    public z: object
    public foo: Foo

    // the comment
    public func (): number {
        if (this.x == undefined || this.x === null) {
            let x = new moment()
            const u = /* inline comment */ true
            const z = Foo.staticProp
            const f = Foo.staticFunc()
            let r = this.paramFunc("aaa");
        } else {
            let x = process.env['test']
            process.exit()
        }
        return this.x;
    }

    /**
     * test test
     * aaa
     */
    public async getDataAsync () {
        let x = await this.requestData();
        x = 1
        return await this.requestData()
    }

    public requestData() {
        return new Promise(resolve => resolve(1))
    }
}