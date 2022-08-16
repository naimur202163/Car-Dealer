import React from 'react';
import './AddProducts.css';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>{

        fetch('https://fathomless-temple-79377.herokuapp.com/addProducts',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result);
            if(result.insertedId){
                alert('Added Successfully');
                reset();
            }
        })

    }
    return (
        <>
            <section className="add_content_heading">
                <h1>Add Product</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Add Product </p>
            </section>
            <section className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title")}
                        placeholder="Title"
                        className="input-fill"
                    />
                    <br />

                    {/* <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="input-fill"
                    />
                    <br /> */}
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("services_photo", { required: true })}
                        placeholder="Photo Url"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("Review", { required: true })}
                        placeholder="Review"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("price", { required: true })}
                        placeholder="$ cost"
                        type="number"
                        className="input-fill"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn" />
                </form>
            </section>
        </>
    );
};

export default AddProducts;