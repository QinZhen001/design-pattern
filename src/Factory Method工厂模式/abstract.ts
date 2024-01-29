// Abstract Factory（抽象工厂）属于创建型模式，工厂类模式抽象程度从低到高分为：简单工厂模式 -> 工厂模式 -> 抽象工厂模式。
// 意图：提供一个接口以创建一系列相关或相互依赖的对象，而无须指定它们具体的类。
// 弊端:
// 只有产品种类稳定时，需要频繁拓展产品风格时才适合用抽象工厂设计模式。

class Product1{
  bind(product: Product1) {}
}

// 具体产品 A
class ConcreteProductA extends Product1{
  
}

// 具体产品 B
class ConcreteProductB extends Product1{}

class ConcreteFactory1{
  createProductA() {
    return new ConcreteProductA();
  }
  createProductB() {
    return new ConcreteProductB();
  }
}


class AbstractFactory {
  createProducts(concreteFactory: ConcreteFactory1) {
    const productA = concreteFactory.createProductA();
    const productB = concreteFactory.createProductB();

    // 建立 A 与 B 固定的关联，即便 A 与 B 实现换成任意实现都不受影响
    productA.bind(productB);


    // productA.bind(productB) 是一种抽象表示：
    // 对于汽车工厂的例子，表示组装汽车的过程。
    // 对于迷宫游戏的例子，表示生成迷宫的过程。
    // 对于事件联动的例子，表示创建组件间关联的过程。
  }
}
