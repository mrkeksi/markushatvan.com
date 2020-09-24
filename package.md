# Dependency upgrade issues

## "postcss-cli": "^7.1.2",

v8 requires peerDep postcss, leads to breakage when running `yarn dev`

## "autoprefixer": "^9.8.6",

v10 requires peerDep postcss, leads to breakage when running `yarn dev`
