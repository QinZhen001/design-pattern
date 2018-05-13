//虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建

var Flower = function () {

}

var B = {
    receiveFlower: function (flower) {
        A.listenGoodMood(function () {
            var flower = new Flower()
            A.receiveFlower(flower)
        })
    }
}


var A = {
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower)
    },
    listenGoodMood: function (fn) {
        setTimeout(function () {
            //假设10s后A的心情变好
            fn()
        }, 10000)
    }
}