import { Decorator } from "./Decorator";

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
export class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
