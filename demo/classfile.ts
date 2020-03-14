import moment from 'moment'

interface Bar {

}

export class Foo {
    public func (param) {
        console.log('test' + param)
    }
}

export class TheClass extends Foo {
    public x: number
    public y: string
    public z: object
    public foo: Foo

    // the comment
    public func (): number {
        if (true) {
            let x = new moment()
            const u = /* inline comment */ true
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