import React from "react";
import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const contactSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

export default function ContactComponent() {
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactSchema),
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
                        <h1>Contact Us</h1>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit(login)}>
                            <div className="form-group mb-2">
                                <label htmlFor="">Name &nbsp;
                                    <a className='text-danger'>
                                        {errors.name?.message && <span>{errors.name?.message}</span>}
                                    </a>
                                </label>
                                <input type="text" className="form-control" name="name" {...register('name')} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="">Email &nbsp;
                                    <a className='text-danger'>
                                        {errors.email?.message && <span>{errors.email?.message}</span>}
                                    </a>
                                </label>
                                <input type="email" className="form-control" name="email" {...register('email')} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="">Subject &nbsp;
                                <a className='text-danger'>
                                    {errors.subject?.message && <span>{errors.subject?.message}</span>}
                                </a></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    {...register('subject')}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="">Message &nbsp;
                                <a className='text-danger'>
                                    {errors.message?.message && <span>{errors.message?.message}</span>}
                                </a></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="message"
                                    {...register('message')}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <button className="btn btn-success">Contact Us</button>
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
