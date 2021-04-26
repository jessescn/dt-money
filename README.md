# SOS-Money

![logo img](src/assets/logo.svg)


Organize your expenses simply and quickly!

Project developed using those technologies:

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJs](https://nextjs.org/)
- [MirageJS](https://miragejs.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Styled-Components](https://styled-components.com/)

and for backend

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [sqlite](https://www.sqlite.org/index.html)

## Execute Project

### Backend

To run the backend code, just execute this follow commands:

```bash
# enter folder and install dependencies
$ cd backend && yarn install

# create database structure (just need to execute once)
$ yarn typeorm migrations:create

# execute server in port 3333
$ yarn dev
```

### Frontend

Run `yarn dev` in root dir after installing the dependencies. It will be running on `localhost:3000`.
