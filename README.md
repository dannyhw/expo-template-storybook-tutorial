# expo-template-storybook-tutorial

You can use this template to create a new react native project with storybook already setup.
Intended for use with the official tutorial.

```
expo init --template expo-template-storybook-tutorial ProjectName
```

## Running storybook

To run storybook on the web run

```
yarn web
```

For android

```
yarn android
```

For ios

```
yarn ios
```

## React native server

Storybook server is also setup, the storybook server is an optional part of react native storybook where you can use web addons and control the device from the web version of storybook. You don't need to use the server, if you want you can run storybook entirely from the device

To run the storybook server run

```
yarn storybook
```
