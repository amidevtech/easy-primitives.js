import { EasyArray } from './easy.array';

describe('EasyArray', () => {
    it('Optional.empty()" should be instance of Optional', () => {
        const test: string[] = ['ala', 'ma', 'kota'];

        // const ea: EasyArray<number> = EasyArray.of(test).forEachIfNotEmpty(it => it.length);
        let len: number = 0;
        EasyArray.of(test).ifHasOneElement(() => it.length);

        // EasyArray.of(test).ifHasOneElementThanConsume(as => {
        // 	as.length
        // 	ifHasOneElement});
    });
});
