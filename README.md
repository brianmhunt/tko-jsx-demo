# tko-jsx-demo
A demonstration of JSX with TKO

Run with

```
>>> yarn install
>>> yarn start
```

Point browser to `localhost:8090`

Build the `dist/main.js` with:

```
>>> yarn make
```


----

As of this writing webpack + babel is doing some bizarre stuff:

1. `import` breaks with an invalid token
2. jsx isn't being compiled
3. class names are being clobbered / minified
