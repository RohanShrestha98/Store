import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import InputField from '../../components/UI/InputField';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SigninSvg from '../../components/Svgicons/SigninSvg';
import { useAuthStore } from '../../store/useAuthStore';
import { useAuthMutation } from '../../hooks/useMutateData';
import toast from 'react-hot-toast';

const SignIn: React.FC = () => {
  const { setUser } = useAuthStore();
  const authMutation = useAuthMutation();
  const navigate = useNavigate();
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .max(36, 'Must be 36 characters or less'),
    password: Yup.string().required('Required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  });

  const onSubmitHandler = async (data: any) => {
    try {
      const response = await authMutation.mutateAsync(['post', '', data]);
      setUser(response);
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? 'Login Failed!');
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke my-8 mx-12 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <div className="mb-5.5 inline-block">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </div>

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
                Sign In to Store Admin
              </h2>

              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
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
                <div className="">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full font-medium mt-2 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    <Link to="/signup" className="text-primary">
                      Sign Up
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

export default SignIn;
