import { createRealmContext } from "@realm/react";
import {Signin} from './models/Signin'

export const realmContext = createRealmContext({
   schema:[Signin]
})