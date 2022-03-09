export class EasyString {
    constructor(private value: string) {}

    public get(): string {
        return this.value;
    }

    public static of(value: string): EasyString {
        return new EasyString(value);
    }

    public isDefined(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    public isNotEmpty(): boolean {
        return this.isDefined() && this.value.length > 0;
    }

    public isEmpty(): boolean {
        return this.isDefined() && this.value.length === 0;
    }

    public length(): number {
        if (this.isDefined()) {
            return this.value.length;
        } else {
            return 0;
        }
    }

    public ifNotEmptyApply(apply: () => void): void {
        if (this.isNotEmpty()) {
            apply();
        }
    }

    public ifNotEmpty(consumer: (T) => void): void {
        if (this.isNotEmpty()) {
            consumer(this.value);
        }
    }

    public getOrElse(elseValue: string): string {
        if (this.isDefined()) {
            return this.value;
        } else {
            return elseValue;
        }
    }

    public getIfNotEmptyOrElse(elseValue: string): string {
        if (this.isNotEmpty()) {
            return this.value;
        } else {
            return elseValue;
        }
    }
}
