import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';



const AddReviews = () => {

    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch('https://fathomless-temple-79377.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
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
                <h1>Add Review</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Add Review </p>
            </section>
            <section className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("client_name")}
                        placeholder="name"
                        defaultValue={user?.displayName}
                        className="input-fill"
                    />
                    <br />

                    <input
                        {...register("services_photo")}
                        placeholder="Photo Url"
                        defaultValue={user?.photoURL}
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        defaultValue={user?.email}
                        className="input-fill"
                    />
                    <br />
                    <textarea
                        {...register("comment", { required: true })}
                        placeholder="Comment"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("review", { required: true })}
                        placeholder="Review"
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

export default AddReviews;