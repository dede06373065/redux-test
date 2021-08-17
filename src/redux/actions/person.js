import { ADD_PERSON } from "../constants";
export const addPersonCreater=personObj=>({type:ADD_PERSON,data:personObj})