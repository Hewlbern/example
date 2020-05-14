import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from "../../components/Layout/Layout";
import SearchBar from '../../components/SearchBar';



export default function Product({ productList }) {
    const router = useRouter();
    console.log(router.query)
    console.log(router.query.product)

    const [advert, setAdvert] = useState(productList);


    useEffect(() => {
        async function loadData() {
            const response = await fetch('http://localhost:5000/adverts/GoogleShoppingAdverts?searchTerm=' +
                router.query.product);
            const productList = await response.json();

            setAdvert(productList);
        }
        console.log(setAdvert)

        if (productList.length == 0) {
            loadData();
        }
    }, []);

    if (!advert[0]) {
        return <div>loading...</div>
    }

    return <pre>
        <Layout>
            <SearchBar />
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Platform</th>
                        <th className="px-4 py-2">Average Pricing</th>
                        <th className="px-4 py-2">Competition</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((e, index) => (



                        <tr key={index}>
                            <td className="border px-4 py-2">{e.product_name}</td>
                            <td className="border px-4 py-2">{e.price}</td>
                            <td className="border px-4 py-2">{e.brand}</td>
                        </tr>



                    ))}
                </tbody>
            </table>
        </Layout>
    </pre>;
}

Product.getInitialProps = async ctx => {
    if (!ctx.req) {
        return { productList: [] };
    }

    const { query } = ctx;
    const response = await fetch(
        'http://localhost:5000/adverts/GoogleShoppingAdverts?searchTerm=' +
        query.product
    );
    const productList = await response.json();
    console.log(productList)
    return { productList: productList };
};