import React from 'react';
import {useForm} from 'react-hook-form';
export const SampleForm: React.FC = () => {
    const {register, handleSubmit } = useForm()
    return (
        <div>
            <form onSubmit={handleSubmit(e => console.log(e))}>
                <label>
                    Name:
                    <input {...register("name")}/>
                </label>
                <label>
                    Content:
                    <input type="textarea" {...register("content")}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
