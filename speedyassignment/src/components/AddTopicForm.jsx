import React, { useState } from "react";
import {
  Box,
  TextField,
  Chip,
  Typography,
  Button,
} from "@mui/material";

const AddTopicForm = (props) => {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordAdd = () => {
    if (keywordInput.trim() !== "" && !keywords.includes(keywordInput)) {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput("");
    }
  };

  const handleKeywordDelete = (keyword) => {
    setKeywords(keywords.filter((kw) => kw !== keyword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Topic:", topic);
    // console.log("Keywords:", keywords);
    props.onSubmit(topic,keywords)
    props.setAddTopic(false)
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        border: "2px solid #f0f2f3",
        width: "400px",
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="bold"
          color="#4f4f4f"
        >
          Add Name and Keywords
        </Typography>
        <TextField
          value={topic}
          onChange={handleTopicChange}
          required
          id="standard-basic"
          label="Topic Name"
          variant="standard"
          sx={{ width: "90%" }}
        />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextField
            label="Keywords"
            value={keywordInput}
            onChange={handleKeywordChange}
            id="standard-basic"
            variant="standard"
            sx={{ width: "90%" }}
          />
          <Button variant="contained" onClick={handleKeywordAdd} sx={{background:'#5f5858',  "&:hover": {
                    background: "#fe6134",
                    color: "white",
                  },}}>
            Add Keyword
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          {keywords.map((keyword, index) => (
            <Chip
              key={index}
              label={keyword}
              onDelete={() => handleKeywordDelete(keyword)}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
        <Box display="flex" gap="15px">
          <Button type="submit" variant="contained" sx={{ mt: 2,background:'#5f5858', "&:hover": {
                    background: "#fe6134",
                    color: "white",
                  }, }}>
            Submit
          </Button>
          <Button variant="contained" sx={{ mt: 2,background:'none',color:'#5f5858',border:'2px solid #5f5858', "&:hover": {
                    borderColor: "#fe6134",
                    background: "white",
                    color:'#fe6134'
                  }, }} onClick={()=>{props.setAddTopic(false)}}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTopicForm;
