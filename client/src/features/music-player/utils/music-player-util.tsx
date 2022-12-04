import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 0,
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backdropFilter: "blur(1px)",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(0deg, rgb(0 0 0) 0%, rgb(0 0 0 / 35%) 85%, rgb(255 255 255 / 0%) 100%)"
      : "linear-gradient(0deg, rgb(255 246 246) 0%, rgb(255 249 249 / 35%) 85%, rgb(255 255 255 / 0%) 100%)",
}));
export const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});
export const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});
export function formatDuration(value: number) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}
