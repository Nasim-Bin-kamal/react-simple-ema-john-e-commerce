import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div>
            <div className="d">
                <form className="mx-auto d-flex justify-content-center align-items-center flex-column my-5" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-success">To place your order fill the Form first</h3>
                    <input className="form-control my-2 border-warning w-25" type="text" placeholder="First name" defaultValue={user?.displayName} {...register("First name", { required: true, maxLength: 80 })} />
                    <input className="form-control my-2 border-warning w-25" type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                    <input className="form-control my-2 border-warning w-25" type="text" placeholder="Email" defaultValue={user?.email} {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input className="form-control my-2 border-warning w-25" type="text" placeholder="Address" {...register("Address", {})} />
                    <input className="form-control my-2 border-warning w-25" type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, max: 11, maxLength: 11 })} />
                    <p>{errors}</p>
                    <input className="btn btn-success my-3 px-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;