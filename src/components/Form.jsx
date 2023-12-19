import React, { useEffect } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select, 
    Option,
} from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form"




export default function Form() {

    const { 
        control, 
        handleSubmit, 
        formState: {errors},
        getValues,
        watch,
        unregister,
        reset,
    } = useForm({
        mode: "onTouched"
    });
    const domain = watch("domain");

     // * Remove from FORM
  useEffect(() => {
    if (domain !== "others") {
      unregister("otherdomainname");
    }
  }, [domain, unregister]);


    const onSubmit = (data) => console.log(data)

  return (
    <div>
        <Card color="transparent" shadow={true} className='p-7 bg-white'>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mb-4">
            Nice to meet you! Enter your details to register.
          </Typography>
        <form 
            className="mb-4 w-[500px] grid grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}    
        >
            <div>
                <Controller
                    name="Username"
                    control={control}
                    rules={{
                        required:"Username is required",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 Characters required",
                        }
                    }}
                    render={({ field }) =>(
                        <Input 
                            size="lg" 
                            {...field} 
                            label="Username" 
                            error={Boolean(errors?.Username?.message)} 
                        /> 
                    )}
                />
                {errors?.Username?.message && (
                    <span className="error-text">{errors?.Username?.message}</span>
                )}
            </div>
            <div>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required:"Email is required",
                       pattern:{
                        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                        message: "Email ID is invaild",
                       }
                    }}
                    render={({ field }) =>(
                        <Input 
                            type="email" 
                            size="lg" 
                            {...field} 
                            label="Email ID"
                            error={Boolean(errors?.email?.message)} 
                        /> 
                    )}
                />
                {errors?.email?.message && (
                    <span className="error-text">{errors?.email?.message}</span>
                )}
            </div>
            <div>
                <Controller
                    name="domain"
                    control={control}
                    rules={{
                    required:"Domain is required",
                    }}
                    render={({ field }) =>(
                        <Select 
                            label="Select Domain" 
                            { ...field } 
                            error={Boolean(errors?.domain?.message)}
                        >
                            <Option value="designer">Designer</Option>
                            <Option value="dev">Developer</Option>
                            <Option value="tester">Tester</Option>
                            <Option value="others">Others</Option>
                        </Select>
                    )}
                />
                {errors?.domain?.message && (
                    <span className="error-text">{errors?.domain?.message}</span>
                )}
            </div>
            
            {
                domain === "others" && (
                    <div>
                        <Controller
                            name="otherdomainname"
                            control={control}
                            rules={{
                                required:"Domain Name is required",
                            }}
                            render={({ field }) =>(
                                <Input 
                                    size="lg" 
                                    {...field} 
                                    label="Type Here" 
                                    error={Boolean(errors?.otherdomainname?.message)}
                                /> 
                            )}
                        />
                        {errors?.otherdomainname?.message && (
                            <span className="error-text">{errors?.otherdomainname?.message}</span>
                        )}
                    </div>
                )
            }   
            
            <div>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required:"Password is required",
                       pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                        message: "Password is not strong enough",
                       },
                    }}
                    render={({ field }) =>(
                        <Input 
                            type="password" 
                            size="lg" 
                            {...field} 
                            label="Password" 
                            error={Boolean(errors?.password?.message)}
                        /> 
                    )}
                />
                {errors?.password?.message && (
                    <span className="error-text">{errors?.password?.message}</span>
                )}
            </div>
            <div>
                <Controller
                  name="confirmpassword"
                  control={control}
                  rules={{
                    required: "Confirm Password is Required",
                    validate: (value) =>
                      getValues("password") === value || "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <Input
                      type="password"
                      {...field}
                      size="lg"
                      label="Confirm Password"
                      error={Boolean(errors?.confirmpassword?.message)}
                    />
                  )}
                />
                {errors?.confirmpassword?.message && (
                  <span className="error-text">
                    {errors?.confirmpassword?.message}
                  </span>
                )}
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-3">
                <Button type="reset" variant="outlined" onClick={() => reset()}>
                    Reset
                </Button>
                <Button type="submit">Create Account</Button>
            </div>
          </form>
        </Card>
    </div>
  )
}