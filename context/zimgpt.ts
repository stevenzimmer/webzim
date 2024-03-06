import { createContext } from "react";
import type { ZimAppContext } from "@/lib/types";

const ZimGPTContext = createContext<ZimAppContext>({} as ZimAppContext);

export default ZimGPTContext;