import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';

const ExampleComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData('categories');
                console.log('API Response:', result); // Add this line
                setData(result);
            } catch (error) {
                console.error('API Error:', error); // Enhanced error logging
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h2>User Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ExampleComponent;