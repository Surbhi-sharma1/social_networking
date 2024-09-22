import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./signup-form.css";
import { styled } from "styled-components";

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 5px;
  @media (max-width: 480px) {
    font-size: 1rem; 
    margin-top: 3px; 
  }
`;

const stepOneSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email format"),
  dob: z.string().nonempty("Date of birth is required"),
});

const stepTwoSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

type StepOneFormData = z.infer<typeof stepOneSchema>;
type StepTwoFormData = z.infer<typeof stepTwoSchema>;

const MultiStepForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState<
    Partial<StepOneFormData & StepTwoFormData>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register: registerStepOne,
    handleSubmit: handleSubmitStepOne,
    formState: { errors: errorsStepOne },
  } = useForm<StepOneFormData>({
    resolver: zodResolver(stepOneSchema),
  });

  const {
    register: registerStepTwo,
    handleSubmit: handleSubmitStepTwo,
    formState: { errors: errorsStepTwo },
  } = useForm<StepTwoFormData>({
    resolver: zodResolver(stepTwoSchema),
  });

  const onSubmitStepOne = (data: StepOneFormData) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const onSubmitStepTwo = (data: StepTwoFormData) => {
    const completeData = { ...formData, ...data };
    console.log("Form Submitted", completeData);
    setSuccessMessage("Your form has been submitted successfully!");
    setIsSubmitted(true);
    setStep(1);
    setFormData(completeData); 
  };

  const handleBack = () => {
    setStep(1);
  };
  useEffect(() => {
    if (isSubmitted) {
     
      const postFormData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const result = await response.json();
          console.log("API Response:", result);  
        } catch (error) {
          console.error("Error submitting form data:", error); 
        }
      };
  
      postFormData(); 
    }
  }, [isSubmitted, formData]);  
  
  return (
    <div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {!isSubmitted && (
        <div>
          {step === 1 && (
            <form onSubmit={handleSubmitStepOne(onSubmitStepOne)}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" {...registerStepOne("firstName")} />
                {errorsStepOne.firstName && (
                  <ErrorMessage>{errorsStepOne.firstName.message}</ErrorMessage>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" {...registerStepOne("lastName")} />
                {errorsStepOne.lastName && (
                  <ErrorMessage>{errorsStepOne.lastName.message}</ErrorMessage>
                )}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...registerStepOne("email")} />
                {errorsStepOne.email && (
                  <ErrorMessage>{errorsStepOne.email.message}</ErrorMessage>
                )}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" {...registerStepOne("dob")} />
                {errorsStepOne.dob && (
                  <ErrorMessage>{errorsStepOne.dob.message}</ErrorMessage>
                )}
              </div>
              <div>
                <button type="button" disabled>
                  Back
                </button>
                <button type="submit">Next</button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitStepTwo(onSubmitStepTwo)}>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" {...registerStepTwo("password")} />
                {errorsStepTwo.password && (
                  <ErrorMessage>{errorsStepTwo.password.message}</ErrorMessage>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" {...registerStepTwo("confirmPassword")} />
                {errorsStepTwo.confirmPassword && (
                  <ErrorMessage>{errorsStepTwo.confirmPassword.message}</ErrorMessage>
                )}
              </div>
              <div>
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="submit">Finish</button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
