    import React from 'react'
    import CardSlider from './CardSlider';
import { Box, Typography } from '@mui/material';
import { Gauge } from '@mui/x-charts';
 import {  gaugeClasses } from '@mui/x-charts/Gauge';

    interface ProgressData {
    title:string;
    subtitle:string;
    }

    interface OnProgress {
  progress: number;
}

    interface ProgressComponentProps {
    progressData: ProgressData[];
    onProgress: OnProgress;
    }

    const ProgressComponent:React.FC<ProgressComponentProps> = ({progressData,onProgress}) => {
    return (
        <>
        <Box  p={2} mt={1} display="flex" alignItems="center" bgcolor="#fff" borderRadius={2} boxShadow={2}>
            <CardSlider cards={progressData} />


<Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
<Gauge
  value={onProgress.progress}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueArc}`]: {
      fill: "#886cc0",
    },
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 37,
      transform: 'translate(0px, -10px)',
    },
    p: 3,
    mt: -5,
   
  }}
  text={({ value, valueMax }) => `${value} / ${valueMax}`}
/>

<Typography
  mt={-3}
  textAlign="center"
  fontWeight={600}
  fontSize={16}
>
  On Progress {onProgress.progress}%
</Typography>



</Box>
        </Box>
        </>
    )
    }

    export default ProgressComponent