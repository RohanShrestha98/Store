import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import SigninSvg from '../../components/Svgicons/SigninSvg';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputField from '../../components/UI/InputField';
import { useAuthStore } from '../../store/useAuthStore';
import toast from 'react-hot-toast';
import { useAuthSignupMutation } from '../../hooks/useMutateData';

const SignUp: React.FC = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const authMutation = useAuthSignupMutation();

  const signupSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .min(10, 'Must be 8 characters or more'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Must be 10 characters or more'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .min(8, 'Must be 8 characters or more')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signupSchema),
  });

  const onSubmitHandler = async (data: any) => {
    try {
      const response = await authMutation.mutateAsync(['post', '', data]);
      console.log('response', response);
      setUser(response);
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? 'Login Failed!');
    }
  };
  return (
    <>
      <div className="rounded-sm border border-stroke mx-12 my-8 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>
              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <SigninSvg />
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Store Admin
              </h2>

              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <InputField
                  required
                  register={register}
                  label={'Full Name'}
                  name={'username'}
                  placeholder="Enter your full name"
                  type="text"
                  classname={''}
                  error={errors?.username?.message}
                />
                <InputField
                  required
                  register={register}
                  label={'Email Address'}
                  name={'email'}
                  placeholder="Enter your email address"
                  type="email"
                  classname={''}
                  error={errors?.email?.message}
                />
                <InputField
                  required
                  register={register}
                  label={'Password'}
                  name={'password'}
                  placeholder="Enter your password"
                  type="password"
                  classname={''}
                  error={errors?.password?.message}
                />
                <InputField
                  required
                  register={register}
                  label={'Confirm Password'}
                  name={'confirmPassword'}
                  placeholder="Re enter your password"
                  type="password"
                  classname={''}
                  error={errors?.confirmPassword?.message}
                />
                <div className="">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full font-medium mt-2 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    <Link to="/signin" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
