import { Stack, Typography, Box, Chip, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import {getColorVariation,getRandomColors} from '../utils.js'


const Title = ({ setSelectedTitle,posts,handleDeletCustom }) => {
  const navigate = useNavigate();
  const handleEditor = (title) => {
    navigate('/editor');
    setSelectedTitle(title);
  };

  // Not adding functionality for permanently deleting all the by-default posts, you can delete them but can restore them by refreshing.
  const handleDelete=(index)=>{
handleDeletCustom(index);
  }

  return (
    <>
      {posts?.map((item, idx) => (
        <Box
        key={idx}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="20px 0px"
          width="100%"
          borderBottom="2px solid #f0f2f3"
        >
          <Box display="flex" flexDirection="column" gap="9px" maxWidth="70%">
          <Link><Typography>{item.title}</Typography></Link>
            <Box>
              <Stack direction="row" spacing={1}>
                {item.keywords.map((chip, index) => {
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
              "&:hover": {
                background: "white",
                color: "#fe6134",
              },
            }}
            onClick={()=>handleEditor(item.title)}
            variant="contained"
          >
            Write {">"}{" "}
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

export default Title;
