interface Strategy {
  doSomething: () => void
}


class Strategy1 implements Strategy {
  doSomething() {
    console.log('Strategy1')
  }
}

class Strategy2 implements Strategy {
  doSomething() {
    console.log('实现方案2')
  }
}

class System {
  strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }
}

// 使用
new System(new Strategy1()) // 策略1实现的系统
new System(new Strategy2()) // 策略2实现的系统
