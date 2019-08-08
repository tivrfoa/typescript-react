import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'
import { Action } from 'redux';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

/*export const loadSuccess = (data: Repository[]) =>
    action(RepositoriesTypes.LOAD_SUCCESS, { data }); */

export const loadSuccess = (data: Repository[]): Action<any> => {
    return action(RepositoriesTypes.LOAD_SUCCESS, { data });
}

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);