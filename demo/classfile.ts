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

export class TheClass extends Foo implements Bar {
    public x: number
    public y: string
    public z: object
    public foo: Foo

    // the comment
    public func (): number {
        if (true) {
            let x = new moment()
            const u = /* inline comment */ true
            const z = Foo.staticProp
            const f = Foo.staticFunc()
            let r = this.paramFunc("aaa");
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