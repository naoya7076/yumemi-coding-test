import React,{useState} from 'react';

export const SampleForm: React.FC = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(name.length === 0 || content.length === 0){
            alert('Name and Content are required');
            return
        }
        console.log(`Name: ${name}, Content: ${content}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleChangeName}/>
                </label>
                <label>
                    Content:
                    <input type="textarea" name="content" value={content} onChange={handleChangeContent}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
