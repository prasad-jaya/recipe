import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

const SignInPage = () =>{

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',
            password:'',
            confirmPassword:''
        },
        validationSchema:Yup.object({
            firstName:Yup.string().required('Required'),
            lastName:Yup.string().required('Required'),
            email:Yup.string().email('Invalid email address').required('Required'),
            phoneNumber:Yup.string()
                .matches(/^[0-9]+$/, 'Phone number must only contain digits')
                .min(9, 'Phone number must be at least 10 digits')
                .required('Required'),
            password:Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
                .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
                .required('Required'),
            confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <>
        <div  className="flex justify-center h-[100vh] bg-slate-200 place-items-center">
            <div className=" sm:mx-auto sm:w-full sm:max-w-xl bg-white p-8 rounded-xl">
                <div className="flex place-content-center mb-6">
                    <h1 className="text-2xl font-bold text-pink-700">COOK<span className="text-gray-800">Me!</span></h1>
                </div>
                <form  className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="w-full ">
                        <h2 className="  text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                            <div className="mt-2">
                                <input id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.firstName && formik.errors.firstName 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.firstName}</p>
                                ): null }
                            </div>
                        </div>
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <input id="lastName" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.lastName && formik.errors.lastName 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.lastName}</p>
                                ): null }
                            </div>
                        </div>   
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.email && formik.errors.email 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.email}</p>
                                ): null }
                            </div>
                        </div>   
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                            <div className="mt-2">
                                <input id="phoneNumber" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="number" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.phoneNumber}</p>
                                ): null }
                            </div>
                        </div> 
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="Password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.password && formik.errors.password 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.password}</p>
                                ): null }
                            </div>
                        </div>   
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                            <div className="mt-2">
                                <input id="confirmPassword" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="Password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword 
                                ? (
                                    <p className="text-red-700 text-sm">{formik.errors.confirmPassword}</p>
                                ): null }
                            </div>
                        </div>     
                    </div>
                   
                    <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
                </form>
                <p  className="mt-2 text-center text-sm leading-9 tracking-tight text-gray-400">Already an account? <Link  className="text-indigo-600 hover:text-indigo-500" to="/">Login</Link> here to Log In.</p>
              
            </div>
        </div>     
    </>
    );
}

export default SignInPage;