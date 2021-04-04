import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: styles => ({
        width: styles.width,
        height: styles.height,
        backgroundColor: '#F2F2F2',
        borderRadius: `${styles.radius}px`,
        boxShadow: `${styles.shape === 'negative'? 'inset':''} ${styles.distance}px ${styles.distance}px ${styles.blur}px #CFCFCF,
                    ${styles.shape === 'negative'? 'inset':''} -${styles.distance}px -${styles.distance}px ${styles.blur}px #FFFFFF`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: `${styles.direction || 'row'}`
    })
});

export default function Neumorphism({children, styles}) {
    const classes = useStyles(styles);

    return (
        <Box className={classes.container}>
            {children}
        </Box>
    )
}
