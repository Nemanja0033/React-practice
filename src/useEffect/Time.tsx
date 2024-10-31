import { useEffect, useState } from 'react';

const Time = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleString()); 
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div>{time}</div>
    );
};

export default Time;
