module.exports = (api) => {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          "paths": [
            {
              rootPathSuffix: './src',
              rootPathPrefix: '@/',
            }
          ]
        },
      ],
      [
        "module-resolver",
        {
          "root": [
            "./"
          ],
          "alias": {
            "@assets": "./assets"
          }
        }
      ]
    ],
  };
};
