import React, { useEffect, useState } from 'react';
import Nav from './Layouts/Nav';
import axios from './Api/index';

export default function Home() {
    const [userData, setUserData] = useState();

    const fetchUserData = async () => {
        try {
            const response = await axios.post('user', null, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            console.log(response.data);
            setUserData(response.data.user);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
           
            <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-5">Welcome to our Landing Page</h1>
                <p className="text-center text-sm md:text-base lg:text-lg mb-5">
                    Here I am practicing React to Laravel API integration.
                </p>
                <div className="bg-white shadow-md rounded-lg p-5 md:p-8 lg:p-10 w-full max-w-md">
                    <div className="text-center">
                        <span className="font-semibold">Name:</span> <span>{userData?.name}</span>
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-semibold">Email:</span> <span>{userData?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
