import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import firebaseConfig from "./firebaseConfig"

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// const analytics = getAnalytics(app)

export default app
