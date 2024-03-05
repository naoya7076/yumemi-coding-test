import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";

const schema = z.object({
    name: z.string().min(1, {message: "名前が空です"}),
    content: z.string().min(10),
})
export const SampleForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(schema)
    })
    return (
        <div>
            <form onSubmit={handleSubmit(e => console.log(e))}>
                <label>
                    Name:
                    <input {...register("name")}/>
                    {errors.name?.message && <p>{errors.name?.message.toString()}</p>}
                </label>
                <label>
                    Content:
                    <input type="textarea" {...register("content")}/>
                    {errors.content?.message && <p>{errors.content?.message.toString()}</p>}
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
