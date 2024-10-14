---
title: ref和reactive的区别
createTime: 2024/10/14 08:33:10
permalink: /article/n81n6lxn/
---

## ref 和 reactive是vue3 响应式的核心，让我们一起探索他们的核心实现及区别


差异：

-   ref通常可以定义基本数据类型和引用数据类型的变量，reactive 则通常定义对象类的变量。

-   reactive定义的对象变量直接赋值会丢失响应式，这是因为重新赋值是一个新对象，而不是原来的那个对象，如何避免 则可以使用state.xxx = xxx 的形式

-   ref 定义的变量，在模板中使用时需要使用.value 来获取值，而 reactive 定义的变量则不需要。
    这是因为ref是通过class RefImpl来实现的,他 对原始数据类型的拦截是通过类里的 class RefImpl{
        get value()
        set value()
    }  这也是为什么使用ref 定义的变量需要使用.value

-   ref 定义的对象类响应式变量则 还是通过reactive 方法来实现的
```javascript
    
      function isObject(obj) {
        return typeof obj === "object" && obj !== null;
      }

      function reactive(target) {
        return createReactiveObject(target);
      }

      function hasOwn(target, key) {
        return target.hasOwnProperty(key);
      }
      // weakMap 弱引用对象，一旦未被使用就会被垃圾回收机制回收
      const toProxy = new WeakMap();
      const toRow = new WeakMap();

      function createReactiveObject(target) {
        // 第一步 由于代理的是对象 如果不是对象直接return
        if (!isObject(target)) return target;

        const ByProxy = toProxy.get(target);

        // 第二步 如果已经代理过 就直接返回该代理过的对象
        if (ByProxy) return ByProxy;

        // 第三步 防止多层代理
        if (toRow.get(target)) return target;

        return new Proxy(target, {
          get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver); // 使用Reflect 做映射 不修改原对象
            console.log('获取');
            return isObject(res) ? reactive(res) : res;
          },
          set(target,key,value,receiver){
            const res = Reflect.set(target,key,value,receiver)
            const hadKey = hasOwn(target,key)
            const oldValue = target[key]
            if(!hadKey) {
                console.log("新增属性")
            }else if(oldValue!==value){
                console.log("修改属性")
            }
            return res
          },
          deleteProperty(target,key){
            let res = Reflect.deleteProperty(target,key)
            console.log("删除")
            return res
          }
        });
      }

     const a= reactive({name:"jhh"})
      console.log("a",a.name)
      a.age=20
      Reflect.deleteProperty(a,'age')
      console.log(a.age)
      console.log(a)
```

-   ref定义的变量在template 中不需要使用.value 这是因为vue3在解析模版时自己去处理了
    ```javascript
        // vue3的模板中使用ref Vue模版编译器在编译模板的时候，会自动将ref 对象解包为其.value
        // ctx.count 就是你定义的count
        function render(ctx){
            return _createElementVNode('div', null, ctx.count.value)
        }
    ```