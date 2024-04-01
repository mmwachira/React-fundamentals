import { useContext } from "react";
import { LPContext } from "./LPContext";

export default function Section({ children }: { children: any}) {
    const level: any = useContext(LPContext);
    return(
        <section className="section">
            <LPContext.Provider value={level + 1}>
                {children}
            </LPContext.Provider>
            
        </section>
    );
    
}