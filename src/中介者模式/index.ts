// Mediator（中介者模式）属于行为型模式。
// 意图：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显示地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。



class Member {
  name: string

  constructor(name: string) {
    this.name = name
  }

  draw() { 
    return '画出图'
  }

  code(picture: string) {
    console.log("code:", picture)
  }
}

const memberA = new Member('美术')
const memberB = new Member('程序')
const picture = memberA.draw() // 美术画出图
const product = memberB.code(picture) // 程序按照美术画的图做产品


// 这个例子中，完成了程序与美术的协同，他们各自不需要知道对方的存在。
// 如果后续又引入了产品、测试工种，他们之间不需要做复杂的关联，只需要在中介者增加对应协同逻辑即可。

