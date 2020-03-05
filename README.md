# PostCSS Unitless

[PostCSS] plugin to convert rem units to scaled unitless values.

[PostCSS]: https://github.com/postcss/postcss

```css
a {
  color: purple;
  font-size: 1.2rem;
  margin: 0.5rem;
}
```

```css
a {
  color: purple;
  font-size: 21.6;
  margin: 9;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-unitless'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
