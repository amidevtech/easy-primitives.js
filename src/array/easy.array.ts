export class EasyArray<T> {
    constructor(private value: Array<T>) {}

    public get(): Array<T> {
        return this.value;
    }

    public static of<T>(value: Array<T>): EasyArray<T> {
        return new EasyArray<T>(value);
    }

    public isDefined(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    public isNotEmpty(): boolean {
        return this.isDefined() && this.value.length > 0;
    }

    public ifNotEmptyApply(apply: () => void): void {
        if (this.isNotEmpty()) {
            apply();
        }
    }

    public ifNotEmpty(consumer: (x: T[]) => void): void {
        if (this.isNotEmpty()) {
            consumer(this.value)
        }
    }

    public map<U>(fun: (T) => U): EasyArray<U> {
        if (this.isNotEmpty()) {
            return EasyArray.of(this.value.map(fun));
        }
    }

    public mapAndGet<U>(fun: (T) => U): Array<U> {
        if (this.isNotEmpty()) {
            return this.value.map(fun);
        }
    }

    public forEach<U>(fun: (T) => void): void {
        if (this.isNotEmpty()) {
            this.value.forEach(fun);
        }
    }

    public hasExactOneElement(): boolean {
        return this.isDefined() && this.value.length === 1;
    }

    public ifHasOneElementThanApply(apply: () => void): void {
        if (this.hasExactOneElement()) {
            apply();
        }
    }

    public ifHasOneElement(consumer: (T) => void): void {
        if (this.hasExactOneElement()) {
            consumer(this.value[0]);
        }
    }

    public join(array: Array<T>): EasyArray<T> {
        if (array !== null && array !== undefined) {
            return EasyArray.of(this.get().concat(array));
        } else {
            return this;
        }
    }
}
