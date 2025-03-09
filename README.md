# Grantshares Docs

External documentation of the GrantShares program app and smart contracts.

This documentation site is built using [Docusaurus 3](https://docusaurus.io/).

## Requirements

The Docusaurus versioned used in this repo requires a node.js installation of at least version 18. Node is available [here](https://nodejs.org/en/download/).

If you already have node installed use the Node Version Manager command line tool to install the required version (e.g., `nvm install 18`) or switch to it (e.g., `nvm use 18`).

You will also need Yarn, which you can install after you've installed node.
```bash
npm install --global yarn
```

## Development

Clone this repository.
```
git clone https://github.com/AxLabs/grantshares-docs.git
cd grantshares-docs
```

Install the dependencies.
```
$ yarn install
```

Build the docs website and run a local dev server. The docs are served at http://localhost:3000/. Most changes in the source code are reflected live without having to restart the server.
```
$ yarn start
```



## Build Static Site

Generate static content into the `build` directory that can be served using any static contents hosting service.
```
$ yarn build
```

