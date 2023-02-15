
import React, { useState } from 'react';

export function MotherComponent() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}> Toggle show </button>
            {show && <ChildComponent/>} 
        </>
    );
}

const ChildComponent = () => <div>ChildComponent</div>;