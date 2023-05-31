import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>GoMyCode</Typography>
        <Typography color={medium}>https://gomycode.com/EG-EN/home</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      We train the next tech generation on the most innovative and recent technologies. We help them get ready for the jobs of the future and prepare them for their professional endeavour while reinforcing their employability
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
