import express from 'express'
import cors from 'cors'
import { TestRoutes } from './domain/route'

import { json } from 'body-parser'

const app = express()

app.use(cors())
app.use(json())
app.use(TestRoutes)

const fun = () => {
    console.log("running on port 5000")
    // const b = new UserBuilder("hello")
}

app.listen(5000, () => fun())

// function Builder() {
//     return function (target: any, key: any) {
//         let val = target[key];
//         const getter = () => val;
//         const setter = (next: any) => val = next
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//             enumerable: false,
//             configurable: false
//         })
//     }
// }

// function Constructor(constructor:Function) {
//     console.log(constructor.name)
// }

// @Constructor
// class UserBuilder {
//     @Builder()
//     text: string;
//     constructor(text: string) {
//         this.text = text;
//     }
// }