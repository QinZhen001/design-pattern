// Builder（生成器）属于创建型模式，针对的是单个复杂对象的创建。
// 意图：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

class Builder {
  build() { }
}

class ConcreteBuilder extends Builder {
  buildA() { }
  buildB() { }
}

class Director {
  create(concreteBuilder: ConcreteBuilder) {
    // 创建了一些零件
    concreteBuilder.buildA();
    concreteBuilder.buildB();

    // 校验参数已经生成实例
    return concreteBuilder.build();
  }
}


class House {}


class HouseBuilder {
  public buildA() {
    // 创建房屋
    // this.xxx = xxx
  }

  public buildB() {
    // 刷油漆
  }

  public build() {
    // 最终创建实例
    return new House(/* ..一堆参数 this.xxx.. */);
  }
}


// 接下来是正式使用
const director = new Director();
const builder = new HouseBuilder();
const house = director.create(builder);
