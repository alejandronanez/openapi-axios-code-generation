/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pullrequest } from '../models/pullrequest';
import type { repository } from '../models/repository';
import type { user } from '../models/user';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param username
     * @returns user The User
     * @throws ApiError
     */
    public static getUserByName(
        username: string,
    ): CancelablePromise<user> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/2.0/users/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * @param username
     * @returns repository repositories owned by the supplied user
     * @throws ApiError
     */
    public static getRepositoriesByOwner(
        username: string,
    ): CancelablePromise<Array<repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/2.0/repositories/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * @param username
     * @param slug
     * @returns repository The repository
     * @throws ApiError
     */
    public static getRepository(
        username: string,
        slug: string,
    ): CancelablePromise<repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/2.0/repositories/{username}/{slug}',
            path: {
                'username': username,
                'slug': slug,
            },
        });
    }

    /**
     * @param username
     * @param slug
     * @param state
     * @returns pullrequest an array of pull request objects
     * @throws ApiError
     */
    public static getPullRequestsByRepository(
        username: string,
        slug: string,
        state?: 'open' | 'merged' | 'declined',
    ): CancelablePromise<Array<pullrequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/2.0/repositories/{username}/{slug}/pullrequests',
            path: {
                'username': username,
                'slug': slug,
            },
            query: {
                'state': state,
            },
        });
    }

    /**
     * @param username
     * @param slug
     * @param pid
     * @returns pullrequest a pull request object
     * @throws ApiError
     */
    public static getPullRequestsById(
        username: string,
        slug: string,
        pid: string,
    ): CancelablePromise<pullrequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/2.0/repositories/{username}/{slug}/pullrequests/{pid}',
            path: {
                'username': username,
                'slug': slug,
                'pid': pid,
            },
        });
    }

    /**
     * @param username
     * @param slug
     * @param pid
     * @returns void
     * @throws ApiError
     */
    public static mergePullRequest(
        username: string,
        slug: string,
        pid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge',
            path: {
                'username': username,
                'slug': slug,
                'pid': pid,
            },
        });
    }

}