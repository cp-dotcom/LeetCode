async function sleep(millis: number): Promise<void> {
    let x=Date.now()+millis

    while(true){
        if(x==Date.now()){
            return 
        }
    }
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */