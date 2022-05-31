/*
var log = console.log

function A(){
    this.name = "aaa"
}
A.prototype.getName = function(){
return this.name
}

var a = new A()
log(a.getName())


function B(){
    this.name ="bbb"
}

B.prototype = new A()

var b = new B()
log(b.getName())
*/

//
var log = console.log

function A(){this.name = "aaa"}
A.prototype.getName = function(){
    return this.name
}
var a = new A()
log(a.getName())

//懶人法: 用new關鍵字直接繼承
function B(){this.name="bbb"}
B.prototype = new A()
var b = new B()
log(b.getName())

//constructor 繼承構造函式, 串個prototype
function C(){this.name="ccc"}
C.prototype = {constructor:A}
C.prototype = A.prototype
var c = new C()
log(c.getName())


//用call繼承構造函式, 串個prototype
function D(){
    A.call(D)
    this.name="ddd"
}
D.prototype = A.prototype
var d = new D()
log(d.getName())


