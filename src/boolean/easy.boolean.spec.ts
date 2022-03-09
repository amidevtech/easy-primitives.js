import { EasyBoolean } from './easy.boolean';

describe('EasyBoolean', () => {
    it('Optional.empty()" should be instance of Optional', () => {
        expect(EasyBoolean.of(true).isTrue()).toBeTruthy();
        expect(EasyBoolean.of(false).isFalse()).toBeTruthy();

        expect(EasyBoolean.of(true).get()).toBeTruthy();
        expect(EasyBoolean.of(false).get()).toBeFalsy();

        expect(EasyBoolean.of(undefined).isDefined()).toBeFalsy();

        let testText: number = 0;
        EasyBoolean.of(true).ifTrue(() => (testText = 5));
        expect(testText).toBe(5);

        testText = 0;
        EasyBoolean.of(false).ifTrue(() => (testText = 5));
        expect(testText).toBe(0);

        testText = 0;
        EasyBoolean.of(true).ifTrueOrElse(
            () => (testText = 5),
            () => (testText = 10)
        );
        expect(testText).toBe(5);

        testText = 0;
        EasyBoolean.of(false).ifTrueOrElse(
            () => (testText = 5),
            () => (testText = 10)
        );
        expect(testText).toBe(10);

        const b: boolean = true;
        testText = 0;
        testText = EasyBoolean.of(true).ifTrueReturnOrElse(
            () => 5,
            () => 10
        );
        testText = b === true ? 5 : 10;
        expect(testText).toBe(10);

        testText = 0;
        testText = EasyBoolean.of(true).ifTrueReturnValueOrElse(5, 10);
        testText = b === true ? 5 : 10;
        expect(testText).toBe(10);
        // expect(Optional.empty()).toBeInstanceOf(Optional);

        EasyBoolean.of(b).ifTrueReturnOrElse(
            () => 'kowalski',
            () => 'jan'
        );
        EasyBoolean.of(b).ifTrueReturnValueOrElse('kowalski', 'jan');
    });

    // describe('Optional.get', () => {
    // 	it('should return value when "get()" is called and value exists', () => {
    // 		expect(Optional.of(text).get()).toBe(text);
    // 	});
    //
    // 	it('should throw error when "get()" is called and value do not exists', () => {
    // 		expect(() => {
    // 			Optional.empty().get();
    // 		}).toThrowError(NoSuchElementError);
    // 	});
    // });
    //
    // describe('Optional.of', () => {
    // 	it('should create Optional "of()" when value exists', () => {
    // 		expect(Optional.of(text).get()).toBe(text);
    // 	});
    //
    // 	it('should throw error when "of()" is called on undefined', () => {
    // 		expect(() => {
    // 			Optional.of(undefined);
    // 		}).toThrowError(NoSuchElementError);
    // 	});
    //
    // 	it('should throw error when "of()" is called on null', () => {
    // 		expect(() => {
    // 			Optional.of(null);
    // 		}).toThrowError(NoSuchElementError);
    // 	});
    // });
});
