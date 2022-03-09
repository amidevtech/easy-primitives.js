export class EasyNumber {
    constructor(private value: number) {}

    public get(): number {
        return this.value;
    }

    public static of(value: number): EasyNumber {
        return new EasyNumber(value);
    }

    public isDefined(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    public isPositive(): boolean {
        return this.isDefined() && this.value > 0;
    }

    public isEqualTo(toCheck: number): boolean {
        return this.isDefined() && this.value === toCheck;
    }

    public isLessThan(toCheck: number): boolean {
        return this.isDefined() && this.value < toCheck;
    }

    public isGreaterThan(toCheck: number): boolean {
        return this.isDefined() && this.value > toCheck;
    }

    public isGreaterOrEqualsThan(toCheck: number): boolean {
        return this.isDefined() && this.value >= toCheck;
    }

    public isLessOrEqualsThan(toCheck: number): boolean {
        return this.isDefined() && this.value <= toCheck;
    }

    public isPositiveOrZero(): boolean {
        return this.isDefined() && this.value >= 0;
    }

    public isNegative(): boolean {
        return this.isDefined() && this.value < 0;
    }

    public isNegativeOrZero(): boolean {
        return this.isDefined() && this.value <= 0;
    }

    public isEqualZero(): boolean {
        return this.isDefined() && this.value === 0;
    }

    public isEqualOne(): boolean {
        return this.isDefined() && this.value === 1;
    }

    public ifPositiveApply(apply: () => void): void {
        if (this.isPositive()) {
            apply();
        }
    }

    public ifPositiveOrZeroApply(apply: () => void): void {
        if (this.isPositiveOrZero()) {
            apply();
        }
    }

    public ifPositive(consumer: (number) => void): void {
        if (this.isPositive()) {
            consumer(this.value);
        }
    }

    public ifPositiveOrZero(consumer: (number) => void): void {
        if (this.isPositiveOrZero()) {
            consumer(this.value);
        }
    }

    public ifNegativeApply(apply: () => void): void {
        if (this.isNegative()) {
            apply();
        }
    }

    public ifNegativeOrZeroApply(apply: () => void): void {
        if (this.isNegativeOrZero()) {
            apply();
        }
    }

    public ifNegative(consumer: (number) => void): void {
        if (this.isNegative()) {
            consumer(this.value);
        }
    }

    public ifNegativeOrZero(consumer: (number) => void): void {
        if (this.isNegativeOrZero()) {
            consumer(this.value);
        }
    }
}
