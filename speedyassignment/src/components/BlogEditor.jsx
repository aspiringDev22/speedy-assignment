import {
  Button,
  Container,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

const BlogEditor = ({ selectedTitle }) => {
  const [value, setValue] = useState("");
  const [tone, setTone] = useState("Conversational");
  const [length, setLength] = useState("Short");

  const handleToneChange = (event) => {
    setTone(event.target.value);
  };
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  return (
    <Container
      sx={{
        margin: "50px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Box
        width="100%"
        display="flex"
        gap="15px"
        justifyContent="space-between"
      >
        <TextField
          defaultValue={selectedTitle}
          id="outlined-helperText"
          label="Article Title"
          sx={{
            margin: "5px 0px",
            width: "50%",
            alignSelf: "flex-start",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
        />
        <Box display="flex" gap="25px" alignItems="center">
          <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Tone</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tone}
              label="Tone"
              onChange={handleToneChange}
              sx={{fontFamily:"Poppins"}}
            >
              <MenuItem value="Conversational">Conversational</MenuItem>
              <MenuItem value="Enthusiastic">Enthusiastic</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Humorous">Humorous</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Length
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={length}
              label="Length"
              onChange={handleLengthChange}
              sx={{fontFamily:"Poppins"}}
            >
              <MenuItem value="Short">Short (~800 words)</MenuItem>
              <MenuItem value="Medium">Medium (~1,500 words)</MenuItem>
              <MenuItem value="Long">Long (~3,000 words)</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              alignSelf: "center",
              marginTop: "8px",
              background: "white",
              color: "#fe6134",
              border: "1px solid #fe6134",
              textTransform:'capitalize',
              fontWeight:'bold',
              "&:hover":{
                background:'#fe6134',
                color:'white'
              }
            }}
          >
            Generate
          </Button>
        </Box>
      </Box>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </Container>
  );
};

export default BlogEditor;
