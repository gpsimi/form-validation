import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select, 
    Option,
  } from "@material-tailwind/react";


export default function Form() {
  return (
    <div>
        <Card color="transparent" shadow={true} className='p-7 bg-white'>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mb-4">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mb-4 w-[500px] grid grid-cols-2 gap-6">
            <div>
                <Input size='lg' label='Username' />
            </div>
            <div>
                <Input size='lg' label='Email ID' />
            </div>
            <div>
                <Select label="Select Domain">
                    <Option value="designer">Designer</Option>
                    <Option value="dev">Developer</Option>
                    <Option value="tester">Tester</Option>
                    <Option value="others">Others</Option>
                </Select>
            </div>
            <div>
                <Input size='lg' label='Password' />
            </div>
            <div>
                <Input size='lg' label='Confirm Password' />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-3">
                <Button type='reset' variant="outlined">Reset</Button>
                <Button type='submit'>Create Account</Button>
            </div>
          </form>
        </Card>
    </div>
  )
}

