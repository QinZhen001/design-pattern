// State（状态模式）属于行为型模式。
// 意图：允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它的类。
// 简单来说，就是将 “一个大 class + 一堆 if else” 替换为 “一堆小 class”。一堆小 class 就是一堆状态，用一堆状态代替 if else 会更好拓展与维护。
// 每一个状态 对应 => 一个状态类

abstract class Context {
  abstract setState(state: State): void;
}

// 定义状态接口
interface State {
  // 模拟台灯点亮
  show: () => string
}


interface Light {
  click: () => void
}

type LightState = State & Light


class TurnOff implements State, Light {
  context: Context;

  constructor(context: Context) {
    this.context = context
  }

  show() {
    return '关灯'
  }


  // 按下按钮
  public click() {
    this.context.setState(new WeakLight(this.context))
  }
}



class WeakLight implements State, Light {
  context: Context;

  constructor(context: Context) {
    this.context = context
  }

  show() {
    return '弱光'
  }

  // 按下按钮
  public click() {
    this.context.setState(new StandardLight(this.context))
  }
}


class StandardLight implements State, Light {
  context: Context;

  constructor(context: Context) {
    this.context = context
  }

  show() {
    return '亮'
  }

  // 按下按钮
  public click() {
    this.context.setState(new StrongLight(this.context))
  }
}


class StrongLight implements State, Light {
  context: Context;

  constructor(context: Context) {
    this.context = context
  }

  show() {
    return '强光'
  }

  // 按下按钮
  public click() {
    this.context.setState(new TurnOff(this.context))
  }
}



class Lamp extends Context {
  // 当前状态
  #currentState: LightState = new TurnOff(this)

  setState(state: LightState) {
    this.#currentState = state
  }

  getState() {
    return this.#currentState
  }

  click() {
    this.getState().click()
  }

}


const lamp = new Lamp() // 关闭
console.log(lamp.getState().show()) // 关灯
lamp.click() // 弱光
console.log(lamp.getState().show()) // 弱光
lamp.click() // 亮
console.log(lamp.getState().show()) // 亮
lamp.click() // 强光
console.log(lamp.getState().show()) // 强光
lamp.click() // 关闭
console.log(lamp.getState().show()) // 关闭
