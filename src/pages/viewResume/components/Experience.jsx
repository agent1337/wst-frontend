import { Box, Typography } from '@mui/material'
import React from 'react'

const styles = {
    title: {
        marginBottom: "12px",
    },
    output: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyItems: "start",
        border: "1px solid #29CC8F",
        borderRadius: "31px",
        height: "40px",
        marginRight: "10px",
        marginBottom: "22px",
        padding: "0 8px",
    },
}

export default function Experience({ title, data }) {
    return (
        <Box>
            {data?.length > 0 && (
                <>
                    <Typography sx={styles.title}>{title}</Typography>
                    {data?.map((item) => (
                        <Typography key={item._id} sx={styles.output}>
                            {item.title}
                        </Typography>
                    ))}
                </>
            )}
        </Box>
    )
}
