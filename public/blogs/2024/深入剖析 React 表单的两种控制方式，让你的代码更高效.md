# React 中的两种表单控制方式：受控组件 vs 非受控组件

在 React 开发中,我们经常需要处理表单输入等用户交互场景。

React 提供了两种不同的组件模式来处理这些交互:受控组件(Controlled Components)和非受控组件(Uncontrolled Components)。

本文将深入探讨这两种组件的概念、数据更新和处理方式、特点、适用场景、测试及优缺点等。

## 受控组件

### 概念：

受控组件指表单数据由 React 组件来管理的组件。组件的状态成为了"唯一数据源"。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。

### 数据处理方式：

-   通过 React 的 state 来存储和管理数据
-   通过 onChange 事件来监听输入变化并更新 state
-   通过 value 属性将 state 中的值绑定到表单元素

### 数据更新方式：

-   通过 setState 更新数据
-   每次 state 更新都会触发组件重新渲染

### 适用场景：

-   需要即时验证的表单
-   需要根据用户输入动态的更改其他 UI 元素的情况
-   需要控制表单提交时的值的情况

### 优点：

-   更好的数据控制和验证
-   即时反馈
-   便于实现复杂的表达逻辑

### 缺点：

-   需要为每个表单元素编写处理函数,代码量较大
-   性能开销较大,每次输入都会触发重新渲染

### 测试：

-   因为组件状态由 React 管理，可以直接通过 props 模拟和验证不同状态

### 示例代码

```jsx
import React, { useState } from 'react';

function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Submitted:', { name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
```

## 非受控组件

### 概念

非受控组件是指表单数据由 DOM 节点来处理的组件。React 不会主动管理组件的状态,而是让表单数据存储在 DOM 节点中。

### 数据处理方式：

-   组件的状态由 DOM 自身管理
-   表单数据存储在 DOM 中
-   通过 ref 来获取 DOM 节点的值
-   不需要为每个状态更新都编写事件处理函数

### 数据更新方式：

-   使用 ref 直接从 DOM 中获取数据
-   数据存储在 DOM 中, 不会自动触发重新渲染

### 适用场景：

-   简单的表单，不需要即时验证
-   集成非 React 代码时（如第三方库）
-   性能优化，兼容不必要的渲染

### 优点：

-   代码量少,实现简单
-   性能较好,不会频繁触发重新渲染，某些情况下性能更好
-   更容易集成非 React 代码

### 缺点：

-   较难实现复杂的表单逻辑
-   不能即时响应用户输入
-   较难进行表单验证

### 测试：

-   因为状态由 DOM 管理，所以需要我们模拟事件触发状态变化来测试, 比如引入 `js-dom` 等第三库支持

### 示例代码

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameInput = useRef(null);
    const emailInput = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameInput.current.value;
        const email = emailInput.current.value;
        console.log('Submitted:', { name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameInput} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailInput} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
```

## 总结

受控组件和非受控组件各有优缺点,选择使用哪种方式取决于具体的应用场景和需求。

受控组件提供了更强的数据控制能力和即时反馈,适合复杂的表单场景;

非受控组件实现简单,性能较好,适合简单的表单和特殊场景

无论选择哪种方式，都要注意保持数据的一致性和完整性，确保用户输入的数据能够被正确地收集、验证和提交。同时，也要关注表单的可访问性和用户体验，为用户提供友好、便捷的表单交互方式。

## 结语

上次我开发了一个工具，解决了手动挨个删除清理无用的仓库问题。如果你感兴趣，可以去看看哦！😊

如果你觉得这个工具对你有所帮助，请不要忘记给我的 GitHub 仓库 **点个 Star** ⭐！你的支持是我前进的动力！

[介绍文章](https://mp.weixin.qq.com/s/t7lgc6b7xJiNhfm5vWo5-A)： https://mp.weixin.qq.com/s/t7lgc6b7xJiNhfm5vWo5-A

[GitHub 仓库地址](https://github.com/yaolifeng0629/del-repos)： https://github.com/yaolife ng0629/del-repos

感谢阅读，我们下次再见！
