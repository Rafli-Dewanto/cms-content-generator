# CMS Content Generator

## Features

- Content generator
- Live editor

## Tech Stack

Next.js 14, TailwindCSS, Supabase, @measured/puck-editor

### Puck Editor

This App uses [@measured/puck-editor](https://github.com/measuredco/puck) to build content-rich pages with ease. It provides a set of blocks that you can drag and drop to create content, and a visual editor that lets you edit the content of the blocks.

To create dynamic component and load data from external API, we need to use `resolveData` function to make a call and pass the data as props to the custom component. [Read more](<https://puckeditor.com/docs/api-reference/configuration/component-config#resolvedatadata-params:~:text=Heading%20Block-,resolveData,-(data%2C%20params)>)

## Run Locally

Clone the project

```bash
  git clone https://bitbucket.org/erafone/cms-content-generator/src/master/
```

Go to the project directory

```bash
  cd cms-content-generator
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_AUTH_URL_ENDPOINT`

`NEXT_PUBLIC_AUTH_URL_ENDPOINT_ALT`

`NEXT_PUBLIC_SUPABASE_URL`

`NEXT_PUBLIC_SUPABASE_ANON_KEY`
