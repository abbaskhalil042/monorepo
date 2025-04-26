import TextInput from "@repo/ui/TextInput";

const page = () => {
  return <TextInput placeholder="Room id" onChange={(e) => console.log(e)} />;
};

export default page;
