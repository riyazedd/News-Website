import React from "react";
import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default function LoginComponent() {
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const login = (data) => {
        console.log(data);
    }

    return (
        <div>
            <HeaderComponent />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Login Page</h1>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit(login)}>
                            <div className="form-group mb-2">
                                <label htmlFor="">Email &nbsp;
                                    <a className='text-danger'>
                                        {errors.email?.message && <span>{errors.email?.message}</span>}
                                    </a>
                                </label>
                                <input type="email" className="form-control" name="email" {...register('email')} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="">Password &nbsp;
                                <a className='text-danger'>
                                    {errors.password?.message && <span>{errors.password?.message}</span>}
                                </a></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    {...register('password')}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}
