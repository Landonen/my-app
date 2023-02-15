// функция как компонент
import React, { useState } from 'react';
export function FComponent({ firstName, lastName, age }) {
    return (
        <div>
            firstName: {firstName}<br/>
            lastName: {lastName}<br/>
            age: {age}
        </div>
    );
}

FComponent.defaultProps = {
    firstName: 'Artjom',
    lastName: 'Eidemiller',
    age: 28,
}

export const CComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <InnerComponent setCount={setCount} count={count} component={<ClassComponent />}>
            <div>Child</div>
            </InnerComponent>
        </>
    )
}
// дополнительный компонент
function InnerComponent ({ setCount, count, component, children }) {
    if(component) console.log('privet');
    return (<>

        <button onClick={() => setCount(count - 1)}>-</button>
        {component && (<>Privet</>)}
        {children}
    </>);
}

// классовый компонент / вначале нужно импортировать REact! import React from 'react';

export class ClassComponent extends React.Component {
    render() {
        return (
            <div>ClassComponent</div>
        )
    }
}


