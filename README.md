# Shopify Vue Mini Cart test

Vue shopping cart component for Shopify

## Setup

To get started clone the repository.

```
git clone https://github.com/jaybee08/Vue-minicart-test.git
```

Run zip command and create new theme in Shopify from theme.zip.

```
yarn run zip
```

Add a config.yml file with your theme settings.

```
development:
  password: [DEV_PASSWORD]
  theme_id: [DEV_THEME]
  store: [DEV_SHOP]
  ignore_files:
    - settings_data.json
```

Run start command and local changes will be pushed.

```
yarn start
```

## Development

If your Shopify theme is up to date with you local project, run the watch command instead of start.

```
yarn watch
```

## Notes

The browserUpdate.js file is used to trigger BrowserSync reloads. It should not be edited.

