// Memento（备忘录模式）属于行为型模式，是针对如何捕获与恢复对象内部状态的设计模式。
// 意图：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。


// 弊端:
// 备忘录模式存储的是完整状态而非 Diff，所以可能会在运行时消耗大量内存（当然在 Immutable 模式下，通过引用共享可以极大程度缓解这个问题）。



// 备忘录
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// 备忘录管理者
class Caretaker {
  private stack: Memento[] = []

  public getMemento(): Memento {
    return this.stack.pop() as Memento
  }

  public addMemento(memento: Memento) {
    this.stack.push(memento)
  }

}

// 发起者
class Originator {
  private state: any

  public getState() {
    return this.state
  }

  public setState(state: any) {
    this.state = state
  }

  public createMemento() {
    return new Memento(this.state)
  }

  public setMemento(memento: Memento) {
    this.state = memento.getState()
  }

}



// 实例化发起者，比如画布、文章管理器、游戏管理器
const originator = new Originator()
// 实例化备忘录管理者
const caretaker = new Caretaker()

// 设置状态，分别对应：
// 画布的组件操作。
// 文章的输入。
// 游戏的 .play()
originator.setState('hello world')

// 备忘录管理者记录一次状态，分别对应：
// 画布的保存。
// 文章的保存。
// 游戏的保存。
caretaker.addMemento(originator.createMemento())


// 从备忘录管理者还原状态，分别对应：
// 画布的还原。
// 文章的读取。
// 游戏读取存档。
originator.setMemento(caretaker.getMemento())
