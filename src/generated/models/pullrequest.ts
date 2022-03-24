/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { repository } from './repository';
import type { user } from './user';

export type pullrequest = {
    id?: number;
    title?: string;
    repository?: repository;
    author?: user;
};
