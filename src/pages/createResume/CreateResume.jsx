import React from 'react';
import { Box, Grid } from '@mui/material';
import { styles } from './createResume.styles';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';

export default function CreateResume() {
    return (
        <section style={styles.section}>
            <Box>
                <ActionHeader type={'first'} />
            </Box>

            <Grid container sx={{ paddingTop: '13px'}}>
                <Grid item xs={12} sm={5} md={5} lg={4.5} sx={{ ...styles.introduction }}>
                    <SelfIntroduction
                    />
                   
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={7.5} sx={{ ...styles.fields }}>
                    <ExperienceIntroduction
                    />
                   
                </Grid>
            </Grid>
        </section>

    )
}
