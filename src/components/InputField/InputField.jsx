import { Input } from 'antd';
import InputLabel from './InputLabel/InputLabel';
import InputError from './InputError/InputError';
import "./inputField.scss"

const InputField = ({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    status,
    label,
    error,
}) => {
    return (
        <div className='inputField'>
            {label && <InputLabel htmlFor={name} text={label} />}

            <Input
                id={id}
                name={name}
                type={type}
                className="w-full block md:text-lg sm:text-base text-sm sm:p-3 p-2 border border-black rounded-none transition-all focus:border-black hover:border-black"
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                status={status}
            />

            <InputError condition={error.condition} text={error.text} />
        </div>
    );
};

export default InputField
