import { combinerReduteurs } from "js/framework/velux";
import app from "./application-reducteur";
import journal from "./journal-reducteur";

export default combinerReduteurs({ app, journal });
