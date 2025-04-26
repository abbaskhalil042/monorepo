interface TextInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ placeholder,onChange }: TextInputProps) => {
  return (
    <>
      <input type="text" placeholder={placeholder} onChange={onChange}/>
    </>
  );
};

export default TextInput;
