import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { EditCalendar } from "@mui/icons-material";

const DashboardPage = () => {

    const [createPlan, setCreatePlan] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCreatePlan(event.target.value)
    }

    const handleSubmit = () => {

    }

    return (
        <React.Fragment>
            <Navbar />

            <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontFamily: 'Montserrat, sans-serif', // Or your chosen font
                            fontWeight: 700,
                            textAlign: 'center',
                            color: '#3f51b5', // Or your chosen color
                            marginTop: 4,
                            marginBottom: 2,
                        }}
                    >
                        The Smart Way to Plan
                    </Typography>
                </Box>

                <Grid container justifyContent='center'>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                            <FormControl fullWidth sx={{ mr: 2 }}>
                                <InputLabel id="planner-label">What is on your mind?</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="planner-label"
                                    id="planner-label"
                                    value={createPlan}
                                    label="What is on your mind?"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"DAY_PLANNER"}>I want to create a Day Planner</MenuItem>
                                    <MenuItem value={"TRIP_PLANNER"}>I want to plan my trip</MenuItem>
                                    <MenuItem value={"STUDY_PLANNER"}>I want to make a study plan</MenuItem>
                                </Select>
                            </FormControl>

                            <Button variant="contained" onClick={handleSubmit} startIcon={<EditCalendar />}>
                                Create
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    )
}

export default DashboardPage;