/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number
): (...args: Params) => void {
    let timer: any;
    return (...args: Params) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
}

// function test(_message: string = "hi") {
// }

// const debouncedTest = debounce(test, 2000);

// debouncedTest("message");
