// Facade（外观模式）属于结构型模式，是一种日常开发中经常被使用到的设计模式。
// 意图：为子系统中的一组接口提供一个一致的界面，Facade 模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

// 弊端:
// 外观模式并不适合于所有场景，当子系统足够易用时，再使用外观模式就是画蛇添足。




// 假设一个子系统是三个类结合使用的，为了抽象而解耦开了
class A {
  b: B

  constructor(b: B) {
    this.b = b
  }

  run() {}
}

class B {
  c: C

  constructor(c: C) {
    this.c = c
  }
}

class C {
  
}


// 它们组合成了一种常用功能，我们可以使用外观模式屏蔽子类的细节直接使用
class Compile {
  public run() {
    const parser = new A(new B(new C))
    parser.run()
  }
}


// 这样我们只要知道 Compile 类就可以了，而不需要了解背后的 A B C 以及其组合关系。
const compile = new Compile()
compile.run()
