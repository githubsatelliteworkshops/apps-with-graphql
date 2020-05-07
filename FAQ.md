# GitHub Apps + GraphQL FAQ

## Where can I find the presentation slides?

You can download it from [here](https://github.com/githubsatelliteworkshops/apps-with-graphql/blob/master/Slides.pdf)

## What do I need to get started?

The workshop code and pre reqs can be found [here](https://github.com/githubsatelliteworkshops/apps-with-graphql#mega-prerequisites).

## What do I need to do to clean up?

You delete an app by navigating to [GitHub Apps settings page](https://github.com/settings/apps), select your app, select `Advanced`, and finally use one of the options in the `Danger Zone`.

More directly, navigate to `https://github.com/settings/apps/<YOUR_APP_NAME>/advanced`

## What's the difference between GitHub Apps vs OAuth Apps?

A breakdown of the difference between GitHub Apps vs OAuth Apps can be found in [the developer docs](https://developer.github.com/apps/differences-between-apps/). In general, we recommend using GitHub Apps since it was finer grain permissions over OAuth Apps.

## How do I access GitHub's GraphQL Explorer?

GitHub's GraphQL Explorer can be found [here](https://developer.github.com/v4/explorer/). You'll need to sign in with your GitHub account. Note, GraphQL Explorer uses your **real, live, production data**.

## Where can I find out more about GitHub's GraphQL?

Basic intro on GraphQL can be found [here](https://graphql.org/). And docs on GitHub's GraphQL API can be found [here](https://developer.github.com/v4/)

## Where can I find out more about GitHub's GraphQL mutations?

You can learn more about GitHub’s GraphQL mutations [here](https://developer.github.com/v4/guides/forming-calls/#about-query-and-mutation-operations)

The list available mutations can be found [here](https://developer.github.com/v4/mutation/)

## What's smee.io and do I have to use it?

[smee.io](https://smee.io/) is webhook payload delivery service.

In this workshop, we used [smee.io](https://smee.io/) to deliver webhooks from GitHub to our local node app. Once you create a smee.io channel, don’t close your that tab!

You could use other services like [ngrok](https://ngrok.com/) to channel webhooks with GitHub's webhooks redelivery feature located in the webhooks settings page located at `https://github.com/<YOUR_USERNAME_OR_ORGNAME>/<YOUR_REPO_NAME>/settings/hooks`.

In production, you will probably want to setup your on server to receive events from GitHub.

## Where do I generate a GitHub App's private key?

Go to `https://github.com/settings/apps/`, click `edit` on the GitHub App, and scroll all the way to the bottom where there should be a `Private keys` section.

Or, navigate directly to ` https://github.com/settings/apps/<YOUR_APP_NAME>#private-key`

## I just want to see complete code. What do I do?

To see everything running, you still need to setup a GitHub App, smee.io channel, and a test repo to apply the GitHub App to as shown in the workshop's video.

But if you just want to see full code, run the following in your terminal:

```bash
git clone git@github.com:githubsatelliteworkshops/apps-with-graphql.git`

cd apps-with-graphql

git checkout workshop-checkpoint-5
```

Majority of the code lives under `apps-with-graphq/lib/server.js`

## Where can I find [@ahoglund](https://github.com/ahoglund)'s and [@tarebyte](https://github.com/tarebyte)'s awesome vim config file?

Andrew's dotfiles can be found [here](https://github.com/ahoglund/dotfiles)

Mark's dotfiles can be found [here](https://github.com/tarebyte/dotfiles)
