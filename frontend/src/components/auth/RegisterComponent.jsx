import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import HeaderComponent from '../../layouts/HeaderComponent';
import FooterComponent from '../../layouts/FooterComponent';
import API from '../../API';

const registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirm: yup.string().required().oneOf([yup.ref('password')], 'Password confirm must be same as password'),
    gender: yup.string().required()
});

export default function RegisterComponent() {
    const { register, setError, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const registerRecord = (data) => {
        API.post('users',data).then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
    }


    return (
        <div>
        <HeaderComponent />
            <div className='container'>
                <div className="row">
                    <div className="col-md-12  mt-3 mb-3">
                        <h1>Register Page</h1>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit(registerRecord)}>
                            <div className="form-group mb-2">
                                <label> Name: &nbsp;
                                    <a className='text-danger'>
                                        {errors.name?.message && <span>{errors.name?.message}</span>}
                                    </a>
                                </label>
                                <input type="text" name='name'
                                    {...register("name")}
                                    className="form-control" />
                            </div>
                            <div className="form-group mb-2">
                                <label>Email address: &nbsp;
                                    <a className='text-danger'>
                                        {errors.email?.message && <span>{errors.email?.message}</span>}
                                    </a>
                                </label>
                                <input type="email" name='email'
                                    {...register("email")}
                                    className="form-control" />
                            </div>
                            <div className="form-group mb-2">
                                <label>Password: &nbsp;
                                    <a className='text-danger'>
                                        {errors.password?.message && <span>{errors.password?.message}</span>}
                                    </a>
                                </label>
                                <input type="password" name='password'
                                    {...register("password")}
                                    className="form-control" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password_confirm">Confirm Password: &nbsp;
                                    <a className='text-danger'>
                                        {errors.password_confirm?.message && <span>{errors.password_confirm?.message}</span>}
                                    </a>
                                </label>
                                <input type="password" name="password_confirm" {...register("password_confirm")} className="form-control" />
                            </div>
                            <div className="form-group mb-2">
                                <label> Gender: &nbsp;
                                    <a className='text-danger'>
                                        {errors.gender?.message && <span>{errors.gender?.message}</span>}
                                    </a>
                                </label>
                                <select name='gender'  {...register("gender")} className="form-control">
                                    <option value=''>Select Gender </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>

                                </select>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="image">Image &nbsp;</label>
                                <input type="file" name="image" {...register("image")} className="form-control" />

                            </div>
                            <div className="form-group mb-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}