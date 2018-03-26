import usersDB from '../resources/friends';
import worker from './getWorker';
import ErrorReporter from "../_containers/ErrorReporter";

/**
 * Parameters is an object of type: {
 *  ageFrom: int/null,
 *  ageTo: int/null,
 *  gender: str/null
 *  searchStr: str/null,
 *  occupation: str/null
 * }
 *
 * @param parameters
 */
export default async function findUsers(parameters) {
    try {
        return await worker.postMessage('findUsers', [usersDB, parameters]);
    } catch (e) {
        ErrorReporter.showError(e);
    }
}