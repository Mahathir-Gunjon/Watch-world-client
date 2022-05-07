import { useEffect, useState } from 'react';

const useWatch = () => {
    const [watchs, setWatchs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/watch')
            .then(res => res.json())
            .then(data => setWatchs(data));
    }, []);

    return [watchs, setWatchs];
};

export default useWatch;