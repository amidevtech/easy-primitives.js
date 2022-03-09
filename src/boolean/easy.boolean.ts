export class EasyBoolean {
    constructor(private value: boolean) {}

    public get(): boolean {
        return this.value;
    }

    public static of(value: boolean): EasyBoolean {
        return new EasyBoolean(value);
    }

    public isTrue(): boolean {
        return (
            this.value !== null &&
            this.value !== undefined &&
            this.value === true
        );
    }

    public isFalse(): boolean {
        return (
            this.value !== null &&
            this.value !== undefined &&
            this.value === false
        );
    }

    public isDefined(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    public ifTrue(apply: () => void): void {
        if (this.isTrue()) {
            apply();
        }
    }

    public ifTrueOrElse(apply: () => void, applyElse: () => void): void {
        if (this.isTrue()) {
            apply();
        } else {
            applyElse();
        }
    }

    public ifTrueReturnOrElse<T>(supplier: () => T, elseValue: () => T): T {
        if (this.isTrue()) {
            return supplier();
        } else {
            return elseValue();
        }
    }

    public ifTrueReturnValueOrElse<T>(trueValue: T, falseValue: T): T {
        return this.ifTrueReturnOrElse(
            () => trueValue,
            () => falseValue
        );
    }
}
