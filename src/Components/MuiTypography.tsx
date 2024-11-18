import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" fontFamily="nunito">
        h1 Heading
      </Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography>Teste sem variante o loki tá feliz</Typography>
      <Typography variant="body2">loki triste</Typography>
    </div>
  );
};
