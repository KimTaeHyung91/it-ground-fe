import { useMediaQuery } from "react-responsive";

const IsPc = () =>
  useMediaQuery({
    query: "(min-width:1024px)",
  });

const IsTablet = () =>
  useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });

const IsMobile = () =>
  useMediaQuery({
    query: "(max-width:767px)",
  });

export default {
  IsPc,
  IsTablet,
  IsMobile,
};
