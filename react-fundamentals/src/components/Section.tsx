import { LPContext } from "./LPContext";

export default function Section({ level, children }: {level: any, children: any}) {
    return(
        <section className="section">
            <LPContext.Provider value={level}>
                {children}
            </LPContext.Provider>
            
        </section>
    );
    
}