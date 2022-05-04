import { useEffect, useState } from 'react';

const useWatch = () => {
    const [watchs, setWatchs] = useState([]);

    useEffect(() => {
        fetch('watchs.json')
            .then(res => res.json())
            .then(data => setWatchs(data));
    }, []);

    return [watchs, setWatchs];
};

export default useWatch;