import { IComponent } from "./IComponent";

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
export class ConcreteComponent implements IComponent {
  public operation(): string {
    return "ConcreteComponent";
  }
}
