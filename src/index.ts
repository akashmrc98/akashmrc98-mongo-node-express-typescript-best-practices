// import os from 'os';
// import cluster from 'cluster'

import express from 'express'
import cors from 'cors'
import { TestRoutes } from './domain/route'
import { json, urlencoded } from 'body-parser'

const fun = () => {
    console.log("running on port 5000")
}

// pm2 tool, 
// max performance technique
// if (cluster.isPrimary) {
//     const cpus = os.cpus().length
//     console.log(cpus)
//     for (let i = 0; i < cpus; i++) {
//         console.log(`>> forking ${i}`)
//         cluster.fork();
//     }
// } else {
//     const app = express()
//     const pid = process.pid;
//     console.log(`>> process id ${pid}`)
//     app.use(cors())
//     app.use(json())
//     app.use(TestRoutes)
//     app.listen(5000, () => fun())
// }

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended:true}))

app.use(TestRoutes)

app.listen(5000, () => fun())