
# Amplify Comment Section

## How to Run

**Step 1:** Install `pnpm` globally for efficient dependency management.

```sh
npm install pnpm -g
```

**Step 2:** Install project dependencies.

```sh
cd aws-amplify-comment
pnpm install
```

**Step 3:** Install Amplify CLI globally.

```sh
npm i @aws-amplify/cli -g
```

**Step 4:** Initialize Amplify project.

```sh
amplify init
```

**Step 5:** Start local API mock.

```sh
amplify mock api
```

**Step 6:** Start the application.

```sh
pnpm run start
```

## To Deploy

**Step 1:** Build the project.

```sh
pnpm run build
```

**Step 2:** Push changes to the cloud.

```sh
amplify push
```

**Step 3:** Publish the application.

```sh
amplify publish
```
