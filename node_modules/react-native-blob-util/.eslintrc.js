module.exports = {
    root: true,
    rules: {
        'prettier/prettier': 0,
        "eqeqeq": 2,
        "comma-dangle": 0,
        "curly": 0,
        "no-console": 1,
        "no-debugger": 1,
        "no-extra-semi": 2,
        "no-extra-parens": 1,
        "no-extra-boolean-cast": 1,
        "no-cond-assign": 2,
        "no-irregular-whitespace": 2,
        "no-undef": 0,
        "no-unused-vars": 0,
        "semi": 2,
        "semi-spacing": 2,
        "valid-jsdoc": [
            1,
            {
                "requireReturn": false,
                "requireParamDescription": false,
                "requireReturnDescription": false
            }
        ],
        "radix": 0
    },
    "parser": "babel-eslint"
};
