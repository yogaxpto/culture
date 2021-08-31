module.exports = {
    extends: ['airbnb-typescript', 'prettier', 'plugin:prettier/recommended'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/prefer-default-export': 0,
        'no-param-reassign': 'off',
        'react/prop-types': 'off',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};
