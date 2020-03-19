export function Emoji() {
    return (target: object, key: string | symbol) => {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = value => {
            val =  `😂 ${value} 😂`;
        };

        // configrable 描述属性是否配置，以及可否删除
        // enumerable 描述属性是否会出现在for in 或者 Object.keys()的遍历中
        Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    };
}