# 原理
使用 Vue mixin 在 `beforeCreate` 阶段将 `createElement` 方法重写，
读取相关属性值，解析语法后进行求值，将求值结果追加到 `staticClass`。

# 使用
在 `main.js` 里引用 css-module mixin，并且全局混入。

# 属性
## cls-name
使用 `cls-name` 表示当前组件中 css module 的类名。

## cls-prop
使用 `cls-prop` 表示从当组件传递到子组件的 css module 类名，不需要子组件做接收操作。

# 语法
## 多值表达式
- 语法：`(value1) (value2)`
- 说明：多个值使用空格分开，每个值需要使用括号包裹，字符串表达式的括号可以省略

## 字符串表达式
- 语法：`(string) string${expression}`
- 说明：括号可以省略，字符串常量，可以使用字符串变量表达式

## 三目运算表达式
- 语法：`(expression ? true : false) (expression ? true)`
- 说明：需要使用括号包裹，false 为空需要省略

## 赋值运算表达式
- 语法：`(child-string-1 = parent-string-2)`
- 说明：需要使用括号包裹，子类 1 等效于父类 2，用于父组件覆盖子组件


# 示例
## 字符串常量
```vue
<template>
    <div cls-name="demo"></div>
</template>

<style module>
.demo {}
</style>
```

## 字符串变量
```vue
<template>
    <div cls-name="demo demo--${size}"></div>
</template>

<script>
export default {
    data() {
        return { size: 'small' };
    }
};
</script>

<style module>
.demo {}
.demo--small {}
</style>
```

## 三目运算
```vue
<template>
    <div>
        <p cls-name="demo (small ? demo--small)"></p>
        <p cls-name="demo (primary ? demo--primary : demo--secondary)"></p>
    </div>
</template>

<script>
export default {
    data() {
        return { small: true, primary: true };
    }
};
</script>

<style module>
.demo {}
.demo--small {}
.demo--primary {}
.demo--secondary {}
</style>
```

## 赋值运算
- 与当前组件不同名的类名，直接字符串表达式
- 与当前组件同名的类名，使用赋值表达式

```vue
<!-- 父组件-->
<template>
    <ChildComponent cls-prop="(title = child-title) content">
        <h2 cls-name="title"></h2>
    </ChildComponent>
</template>

<style module>
.title {}
.child-title {}
.content {}
</style>
```

```vue
<!-- 子组件-->
<template>
    <div>
        <h1 cls-name="title"></h1>
        <article cls-name="content">
            <slot></slot>
        </article>
    </div>
</template>

<style module>
.title {}
.content {}
</style>
```

# css module 规范
- <https://github.com/css-modules/css-modules>
