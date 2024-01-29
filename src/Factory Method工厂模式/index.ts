// Factory Method（工厂方法）属于创建型模式，利用工厂方法创建对象实例而不是直接用 New 关键字实例化。
// 理解如何写出工厂方法很简单，但理解为什么要用工厂方法就需要动动脑子了。工厂方法看似简单的将 New 替换为一个函数，其实是体现了面向接口编程的思路，它创建的对象其实是一个符合通用接口的通用对象，这个对象的具体实现可以随意替换，以达到通用性目的。
// 意图：定义一个用于创建对象的接口，让子类决定实例化哪一个类。Factory Method 使一个类的实例化延迟到其子类。


// 产品接口
interface Product {
  save: () => void;
}

// 工厂接口
interface Factory {
  createProduct: () => Product;
}


// 具体产品
class ConcreteProduct implements Product {
  save(){
    console.log('save concret product');
  };
}

// 具体工厂
class ConcreteFactory implements Factory {
  createProduct(){
    return new ConcreteProduct();
  };
}


let concreteFactoryInstance = new ConcreteFactory()
const concreteProduct = concreteFactoryInstance.createProduct()
concreteProduct.save()
