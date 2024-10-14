'use client'

import TransfersComponent from "@/components/TransfersComponent";
import axios from "axios";

const urls = {
    'get.home': '',
    'get.users': 'users',
    'post.users': 'users',
    'post.login': 'auth/login',
    'get.profile': 'profile',
    'post.transfers': 'transfers',
    'post.deposits': 'deposits',
    'get.transfers': 'transfers',
    'get.transfer': 'transfers/:id/return',
};

const balance = 150.00;

const transfers = [1,2,3,4,5,6,7,8,9].map(
  item => ({ transactionId: item, sender: item, receiver: item, amount: item, return: Math.round((Math.random() * 1)) })
);

type AxiosMethods = 'get' | 'post';

const requester = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
});

const getData = async (url: string, method: AxiosMethods = 'get', body = {}) => {
    const response = await requester[method](url, body);

    return response.data;
}


const username = 'Krista88';
const password = 'NfrnXb10di_ZOew';

// const users = getData(urls["get.users"], 'get');
const token = getData(urls["post.login"], 'post', { username, password });
console.log({token});

export default function Home() {
    return (
        <div>
            <TransfersComponent transfers={ transfers } balance={ balance }></TransfersComponent>
        </div>
    );
}
