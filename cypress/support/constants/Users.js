/*
    Constants for the various user accounts

    For a production system I would not store usernames and passwords
    like this in the source code.  I would use some form of secrets
    manager and pass the values via environment variables (e.g. GitHub
    Secrets).

    However, since the sauce demo website lists the credentials on the
    login page, then it's fine.
 */

export const VALID_PASSWORD = 'secret_sauce';

export const STANDARD_USER = {
    USERNAME: 'standard_user',
    PASSWORD: VALID_PASSWORD
};

export const LOCKED_USER = {
    USERNAME: 'locked_out_user',
    PASSWORD: VALID_PASSWORD
};

export const PROBLEM_USER = {
    USERNAME: 'problem_user',
    PASSWORD: VALID_PASSWORD
};

export const PERFORMANCE_USER = {
    USERNAME: 'performance_glitch_user',
    PASSWORD: VALID_PASSWORD
};

export const ERROR_USER = {
    username: 'error_user',
    PASSWORD: VALID_PASSWORD
};

export const VISUAL_USER = {
    USERNAME: 'visual_user',
    PASSWORD: VALID_PASSWORD
};
