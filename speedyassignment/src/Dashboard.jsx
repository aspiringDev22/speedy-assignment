import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Title from "./components/Title";
import AddTopicForm from "./components/AddTopicForm";
import CustomArticles from "./components/CustomArticles";
import data from "../data.js";

const tabStyles = {
  color: "black",
  fontFamily: "Poppins",
  textTransform: "capitalize",
  fontWeight: "500",
  fontSize: "17px",
  margin: "0px 7px",
};

const Dashboard = ({ setSelectedTitle }) => {
  const[posts,setPosts] = useState(data)
  const [value, setValue] = useState("1");
  const [addTopic, setAddTopic] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleAddTopic = () => {
    setAddTopic(true);
  };

  const handleFormSubmit = (topic, keywords) => {
    const newData = {
      topic: topic,
      keywords: keywords,
    };
    const updatedData = [...submittedData, newData];
    setSubmittedData(updatedData);
    try {
      localStorage.setItem("submittedData", JSON.stringify(updatedData));
    } catch (error) {
      console.error("Error storing submittedData:", error);
    }
  };

  const handleDeleteArticle = (articleIndex) => {
    const updatedData = [...submittedData];
    updatedData.splice(articleIndex, 1);
    setSubmittedData(updatedData);
    try {
      localStorage.setItem("submittedData", JSON.stringify(updatedData));
    } catch (error) {
      console.error("Error storing submittedData:", error);
    }
  };

  const handleDeleteCustom=(index)=>{
    if (posts) {
      setPosts(posts.filter((_, idx) => idx !== index));
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("submittedData");

    if (storedData) {
      try {
        setSubmittedData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing submittedData:", error);
        setSubmittedData([]);
      }
    }
  }, []);

  if (addTopic) {
    return (
      <>
        <AddTopicForm setAddTopic={setAddTopic} onSubmit={handleFormSubmit} handleDeleteCustom={handleDeleteCustom} />
      </>
    );
  }

  return (
    <Container
      style={{
        minHeight: "10vh",
        padding: "50px 90px",
        border: "1px solid black",
        borderBottom:'none',
        borderTop: "none",
        fontFamily: "Poppins",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          width:'100%'
        }}
      >
        <Typography variant="h5" color="#292f36" fontWeight="600">
          Categories
        </Typography>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  sx: { background: "#fe6134" },
                }}
                sx={{
                  "& button.Mui-selected": { color: "#fe6134" },
                }}
              >
                <Tab label="All" value="1" sx={tabStyles} />
                <Tab label="Custom" value="2" sx={tabStyles} />
                <Tab label="ICP" value="3" sx={tabStyles} />
                <Tab label="Mission" value="4" sx={tabStyles} />
                <Tab label="Product" value="5" sx={tabStyles} />
              </TabList>
              <Button
                variant="contained"
                sx={{
                  background: "#fe6134",
                  width: "130px",
                  fontWeight: "600",
                  "&:hover": {
                    background: "white",
                    color: "#fe6134",
                  },
                }}
                onClick={handleAddTopic}
              >
                Add Topic {">"}
              </Button>
            </Box>
            <Grid height="150vh" padding="40px 10px">
              <Typography
                border="2px solid #f0f2f3"
                padding="10px"
                borderRadius="10px 10px 0px 0px"
                color="#686873"
                fontWeight="600"
              >
                Recommended Topics
              </Typography>
              <TabPanel
                value="1"
                sx={{ border: "2px solid #f0f2f3", borderTop: "0px" }}
              >
               <Title setSelectedTitle={setSelectedTitle} posts={posts} handleDeletCustom={handleDeleteCustom}/>
                {submittedData.length !== 0 &&    <CustomArticles
                    submittedData={submittedData}
                    setSubmittedData={setSubmittedData}
                    onDeleteArticle={handleDeleteArticle}
                    setSelectedTitle={setSelectedTitle}
                  />}
              </TabPanel>
              <TabPanel
                value="2"
                sx={{ border: "2px solid #f0f2f3", borderTop: "0px" }}
              >
                {submittedData.length == 0 ? (
                  <Typography
                    variant="h6"
                    textAlign="center"
                    color="darkslateblue"
                    fontWeight="bold"
                  >
                    No Articles yet, Add them by Clicking Add Topic.
                  </Typography>
                ) : (
                  <CustomArticles
                    submittedData={submittedData}
                    onDeleteArticle={handleDeleteArticle}
                    setSelectedTitle={setSelectedTitle}
                  />
                )}
              </TabPanel>
              <TabPanel
                value="3"
                sx={{ border: "2px solid #f0f2f3", borderTop: "0px" }}
              >
                <Typography variant="h6"
                    textAlign="center"
                    color="#515170"
                    fontWeight="bold">No Articles yet, Refer Custom and Mission Tabs :)</Typography>
              </TabPanel>
              <TabPanel
                value="4"
                sx={{ border: "2px solid #f0f2f3", borderTop: "0px" }}
              >
                <Title setSelectedTitle={setSelectedTitle} posts={posts} handleDeletCustom={handleDeleteCustom}/>
              </TabPanel>
              <TabPanel
                value="5"
                sx={{ border: "2px solid #f0f2f3", borderTop: "0px" }}
              >
                <Typography variant="h6"
                    textAlign="center"
                    color="#515170"
                    fontWeight="bold">No Articles yet, Refer Custom and Mission Tabs :)</Typography>
              </TabPanel>
            </Grid>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
