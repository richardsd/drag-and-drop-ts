namespace App {
    // autobind decorator
    export function AutoBind() {
        return function (_target: any, _methodName: string, descriptor: PropertyDescriptor) {
            // get the original method
            const originalMethod = descriptor.value;
            // created a new descriptor with a getter where we bound the `this` to the original method
            // this method is the getter of the descriptor
            const adjDescriptor: PropertyDescriptor = {
                configurable: true,
                get() {
                    // notice that the `this` is the actual object we want to inject
                    const boundFn = originalMethod.bind(this);
                    return boundFn;
                }
            };
            return adjDescriptor;
        };
    }

    // autobind alternative decorator without factory function
    export function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
        // get the original method
        const originalMethod = descriptor.value;
        // created a new descriptor with a getter where we bound the `this` to the original method
        // this method is the getter of the descriptor
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                // notice that the `this` is the actual object we want to inject
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
}
