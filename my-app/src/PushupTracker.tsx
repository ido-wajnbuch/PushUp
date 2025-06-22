import React from 'react';
import useCounter from './useCounter';

const PushupTracker = () => {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <button onClick={increment}>עוד אחת</button>
            <button onClick={decrement}>אופס טעות</button>
            <button onClick={reset}>מההתחלה</button>
            Pushups: {count}
        </div>
    );
}

export default PushupTracker;
