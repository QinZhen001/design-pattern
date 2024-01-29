interface Visitor {
  visit(element: MyELement);
}

interface MyELement {
  accept(visitor: Visitor);
}

class ConcreteElement implements MyELement {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class ConcreteVisitorX implements Visitor {
  public visit(element: MyELement) {
    element.accept(this);
  }
}

// 先创建元素
const element = new ConcreteElement()
// 访问者 X
const visitorX = new ConcreteVisitorX()
// 然后让访问者 visit 观察一下元素
visitorX.visit(element)
