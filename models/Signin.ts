
import {Realm} from "realm";

export class Signin extends Realm.Object<Signin> {

  _id?: Realm.BSON.ObjectId;
  email: string;
  password: string;
  test:string;


  static schema={
    name: 'sign_in',
  properties: {
    _id: 'objectId?',
    email: 'string',
    password: 'string',
    test:'string'
  },
  primaryKey: '_id',
  }
  
};
