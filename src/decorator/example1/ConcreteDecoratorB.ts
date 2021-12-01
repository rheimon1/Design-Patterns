import { Decorator } from "./Decorator";

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
export class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecorationB(${super.operation()})`;
  }
}
