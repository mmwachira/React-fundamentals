import { useContext } from "react";
import { LPContext } from "./LPContext";

export default function Section({ children, isFancy }: { children: any, isFancy: any}) {
    const level: any = useContext(LPContext);
    return(
        <section className={
            'section' +
            (isFancy ? 'fancy' : '')
        }>
            <LPContext.Provider value={level + 1}>
                {children}
            </LPContext.Provider>
            
        </section>
    );
    
}