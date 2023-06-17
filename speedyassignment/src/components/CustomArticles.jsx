import React from "react";
import { Stack, Typography, Box, Chip, Button } from "@mui/material";
import { getColorVariation, getRandomColors } from "../utils.js";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CustomArticles = ({ submittedData, setSelectedTitle, onDeleteArticle }) => {
const navigate = useNavigate();
    const handleDelete = (articleIndex) => {
        onDeleteArticle(articleIndex);
      };

      const handletoEditor=(name)=>{
        navigate('/editor');
        setSelectedTitle(name);
      }


  return (
    <>
      {submittedData?.map((data, idx) => (
        <Box
          key={idx}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="20px 0px"
          width="100%"
          borderBottom="2px solid #f0f2f3"
          minHeight="100px"
        >
          {console.log(data.topic, data.keywords)}
          <Box display="flex" flexDirection="column" gap="9px" maxWidth="70%">
            <Typography>{data.topic}</Typography>
            <Box>
              <Stack direction="row" spacing={1}>
                {data.keywords?.map((chip, index) => {
                  const chipColor = getRandomColors();
                  const color = getColorVariation(chipColor).color;
                  const bgColor = getColorVariation(chipColor).background;
                  return (
                    <Chip
                      key={index}
                      label={chip}
                      sx={{
                        borderRadius: "10px",
                        fontWeight: "bold",
                        border: `1px solid ${color}`,
                        color: color,
                        background: bgColor,
                      }}
                    />
                  );
                })}
              </Stack>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                alignSelf: "flex-start",
                background: "#fe6134",
                width: "130px",
                fontWeight: "600",
                marginRight: "5px",
                "&:hover": {
                  background: "white",
                  color: "#fe6134",
                },
              }}
              onClick={()=>handletoEditor(data.topic)}
              variant="contained"
            >
              Write {">"}
            </Button>
            <Button
              sx={{
                "&:active": {
                  background: "lightyellow",
                  transform: "rotate(20deg)",
                },
              }}
              onClick={()=>handleDelete(idx)}
            >
              <AiOutlineDelete size={30} color="#fe6134" />
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CustomArticles;
