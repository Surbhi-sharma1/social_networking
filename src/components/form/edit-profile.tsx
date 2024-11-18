import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { updateUserProfile, User } from '../../redux/user/userSlice';
import { RootState } from '../../redux/store';

import { styled } from 'styled-components';


const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  margin-top:5vh;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
  }
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: red;
`;

const SubmitButton = styled.button`
  width: 80%;
  padding: 12px;
  align-items:center;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;
const Heading = styled.div`
color:black;
 font-size: 30px;
`;
const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email format"),
});
interface EditProfileProps {
  onClose: () => void; 
}
const EditProfile: React.FC<EditProfileProps> = ({ onClose  }) => {
   
  const dispatch = useDispatch();
  const { name, companyName, email } = useSelector((state:RootState) => state.userProfile);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: { name, companyName, email },
  });

  const onSubmit = (data:User) => {
    dispatch(updateUserProfile(data));
  onClose();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
  <Heading>Post Your Update</Heading>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" {...register("name")} />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="companyName">Company Name:</Label>
        <Input type="text" {...register("companyName")} />
        {errors.companyName && <ErrorMessage>{errors.companyName.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" {...register("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <SubmitButton type="submit">Update Profile</SubmitButton>
    </FormContainer>
  );
};

export default EditProfile;
