import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import useScript from "../Chat/useScript";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MyProfile from "../components/MyMessages";

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function ChatPage() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== "undefined") {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          "[data-feather], .feather": {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: "var(--Icon-margin)",
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: "1em",
            height: "1em",
          },
        })}
      />
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar />
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyProfile />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
