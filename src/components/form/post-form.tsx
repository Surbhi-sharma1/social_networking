import { z } from "zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export const postSchema = z.object({
  title: z.string().min(5, "Title is Required"),
  description: z.string().min(10, "Description in 100 characters").optional(),
  waitlist: z.boolean().optional(),
  comments: z.boolean().optional(),
});

type CreatePostFormData = z.infer<typeof postSchema>;

const TextInput = styled.input`
  width: 80%;
  margin-top: 4vh;
  padding: 10px;
  border: 1px solid #222020;
  border-radius: 4px;
  margin-bottom: 5vh;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #141212;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #555;
  &:hover {
    color: #000;
  }
`;

export const CreatePostForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(postSchema),
  });
const imageInputRef=useRef<HTMLInputElement|null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  const attachmentInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: CreatePostFormData) => {
    console.log("Form Submitted: ", data);
  };

  // Handlers to open the file input dialog
  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleVideoClick = () => {
    videoInputRef.current?.click();
  };

  const handleAttachmentClick = () => {
    attachmentInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: string
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log(`${fileType} selected: `, file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="heading">Post Your Update</h2>

        <TextInput
          style={{ width: "40vw" }}
          {...register("title")}
          type="text"
          placeholder="Add a title..."
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

        <Textarea
          {...register("description")}
          placeholder="Add a description..."
          rows={3}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}

        <IconContainer>
          {/* Hidden input fields for file uploads */}
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "Image")}
          />
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "Video")}
          />
          <input
            ref={attachmentInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "Attachment")}
          />

          {/* Buttons to trigger file inputs */}
          <IconButton
            type="button"
            aria-label="Add Image"
            onClick={handleImageClick}
          >
            <ImageIcon fontSize="large" />
          </IconButton>
          <IconButton
            type="button"
            aria-label="Add Video"
            onClick={handleVideoClick}
          >
            <VideoLibraryIcon fontSize="large" />
          </IconButton>
          <IconButton
            type="button"
            aria-label="Add Attachment"
            onClick={handleAttachmentClick}
          >
            <AttachFileIcon fontSize="large" />
          </IconButton>
        </IconContainer>
      </div>

      <button type="submit">Post</button>
    </form>
  );
};
