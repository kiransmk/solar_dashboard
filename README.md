# Solar UI

## Background Info

At Bright (and any solar company), one of the key items of user experience is
visualizing the performance of your solar system. Bright uses several different
vendors for production monitoring for our solar installation, and Enphase is the
most sophisticated - they come included with their own app for visualizing the
details of their system.

The downside of our customers using the Enphase app directly are:

1. It does not work for our non-Enphase hardware
2. It forces customers to use 1 app for monitoring, and the "Bright app" for
   payments, invoicing, support etc.
3. Additional setup work (like Enphase account setup) creates additional work
   and training for our installation partners.

So, we would like to replicate _some_ of the functionality of the Enphase app
into the Bright app.

# The Problem

I have included a few screenshots of the Enphase app, and short video overview
of what to build. Please replicate some subset of the functionality of this app.

Throughout your implementation, please try to show your knowledge of some of the
following:

1. React and React hooks
2. Your favorite CSS layout paradigm (ideally flexbox or css grid)
3. "Good" UI/UX
4. Mobile responsive design (where appropriate)
5. Anything else you want to "show off"

## Application Setup

Application is built with React + TypeScript + Vite + TailwindCss

### Setup Frontend on your local

- Open terminal of your choice
- Clone this repo
- Install lates stable Node and pnpm

```shell
cd bright_exercise
pnpm install
```

- Setup is complete
- Start the app

```
pnpm run dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
