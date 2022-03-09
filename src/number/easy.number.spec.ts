import { EasyBoolean } from '../boolean/easy.boolean';
import { EasyNumber } from './easy.number';

describe('EasyNumber', () => {
    it('Optional.empty()" should be instance of Optional', () => {
        expect(EasyNumber.of(10).isPositive()).toBeTruthy();
        expect(EasyNumber.of(0).isPositive()).toBeFalsy();
        expect(EasyNumber.of(-1).isPositive()).toBeFalsy();

        expect(EasyBoolean.of(false).isFalse()).toBeTruthy();

        let text: string = '';
        EasyNumber.of(10).ifPositive(() => (text = 'kowalski'));
        expect(text).toBe('kowalski');

        text = '';
        EasyNumber.of(10).ifPositiveThenConsume(
            (it) => (text = 'kowalski' + it)
        );
        expect(text).toBe('kowalski10');
    });
});
