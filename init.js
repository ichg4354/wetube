import app from "../weTube/app.js"
const PORTS = 4000


const appListener = () => console.log(`✅ listening to: http://localhost:${PORTS}`)
app.listen(PORTS, appListener);


