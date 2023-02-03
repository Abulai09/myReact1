import React from "react"

export let withSuspense = (Component) =>{
    return (props)=>{
        return <React.Suspense fallback={"Loading"}>
                 <Component {...props}/> 
            </React.Suspense>
    }
}
