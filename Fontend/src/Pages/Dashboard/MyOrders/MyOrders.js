import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://fathomless-temple-79377.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data)
            });
    }, [user?.email, control]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this ?')
        if (proceed) {
            fetch(`https://fathomless-temple-79377.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                    }
                });
        }
    };

    return (
        <>
            <section className="add_content_heading">
                <h1>My Orders {myOrders.length}</h1>
                <p> <a href="/"> <span>home</span> </a> &#62;&#62; My Orders</p>
            </section>
            <section>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="table_btn" >Cancel Order</th>
                        </tr>
                    </thead>
                    {
                        myOrders?.map((pd, index) => (
                            <tbody
                                key={pd._id}
                            >
                                <tr>
                                    <td data-label="S.No">{index}</td>
                                    <td data-label="Product">{pd.title}</td>
                                    <td data-label="Price">{pd.date}</td>
                                    <td data-label="Price">{pd.price}</td>
                                    <td data-label="Status">{pd?.status}</td>
                                    <td className="table_btn" data-label="Cancel">
                                        <button
                                            onClick={() => handleDelete(pd?._id)}
                                            className="btn">Cancel</button>
                                    </td>
                                </tr>

                            </tbody>
                        ))
                    }

                </table>
            </section>

        </>
    );
};

export default MyOrders;