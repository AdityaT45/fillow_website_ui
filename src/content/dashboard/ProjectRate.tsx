import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const ProjectRate = () => {
  return (
    <Box p={2} mt={2} bgcolor="#fff" borderRadius={2} sx={{boxShadow:"0 1px 4px rgba(0,0,0,0.08)",}}>
      <LineChart
        xAxis={[
          {
            data: [0, 1, 2, 3, 4, 5, 6],
            valueFormatter: (v: number) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][v],
          },
        ]}
        yAxis={[{ min: 0, max: 70 }]}
        series={[
          {
            data: [20, 40, 20, 30, 50, 40, 60],
            label: 'Project Rate',
            color: '#886cc0',      // ✔️ line color
            curve: 'monotoneX',    // ✔️ smooth line
          },
        ]}
        height={300}
        sx={{
          '& .MuiLineElement-root': {
            strokeWidth: 4,       // ✔️ line thickness
          },
        }}
      />
    </Box>
  );
};

export default ProjectRate;
