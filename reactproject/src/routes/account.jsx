import { Suspense, lazy } from 'react';

const Temp = lazy(() => import("./temp"))

function Account() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <h1>You are at Account page</h1>
                <Temp/>
            </Suspense>
        </>
    )
  }
  
  export default Account;

{/*
    navbar - ok
*/}
  
  