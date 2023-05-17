---
layout: page
title: Modify Open-Source Projects
subtitle: Beginner friendly guide to open-soure projects
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/stack-duo.png
---

<p align="center">
<img src="/assets/img/pr.png" class=responsive width="250" height="250" maxheight="300" />
</p>

## How to Fork an Open Source Project

In this tutorial, we will walk through the process of forking an open source project, making a contribution, and opening a pull request. We will use GitHub for managing and sharing our work and Visual Studio Code for editing code. We will use [Bitcoiner.Guide](https://github.com/BitcoinQnA/Bitcoiner.Guide) project as an example.

### Step 1: Setting Up a GitHub Account and Installing Necessary Tools

Before we can start contributing to open source projects, we need to have a GitHub account. If you don't already have an account, follow these steps:

1. Visit [https://github.com](https://github.com).
2. Click on the "Sign Up" button.
3. Follow the prompts to create a new account.

After creating your GitHub account, you'll also need to install Git and Visual Studio Code on your computer:

1. Download and install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Download and install Visual Studio Code from [https://code.visualstudio.com/download](https://code.visualstudio.com/download).

### Step 2: Forking Bitcoiner.Guide

Forking creates a copy of a repository in your own GitHub account. This allows you to make changes without affecting the original project. Here's how you fork Bitcoiner.Guide repository:

1. Visit Bitcoiner.Guide repository at [https://github.com/BitcoinQnA/Bitcoiner.Guide](https://github.com/BitcoinQnA/Bitcoiner.Guide).
2. Click on the "Fork" button at the top right corner of the page.
3. Select your account to create the fork.

<p align="center">
  <img src="/assets/img/step-1.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

You now have a copy of Bitcoiner.Guide repository in your GitHub account.

### Step 3: Cloning the Forked Repository

Cloning is the process of downloading the repository from GitHub to your local computer. To clone your forked repository using Visual Studio Code, follow these steps:

1. Open Visual Studio Code.
2. Click on the "Source Control" icon on the left sidebar or press `Ctrl+Shift+G`.

<p align="center">
  <img src="/assets/img/step-3.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

3. Click on "Clone Repository".
4. Enter the URL of your forked repository (https://github.com/BitcoinQnA/Bitcoiner.Guide) and press `Enter`.

<p align="center">
  <img src="/assets/img/step-4.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

5. Choose a local path where the repository will be cloned.
6. Click "Open" to open the cloned repository in Visual Studio Code.

### Step 4: Creating a New Branch

Creating a new branch helps isolate your changes from the main (often called `master` or `main`) branch. This is useful when working on multiple different features or bugs at the same time. Here's how to create a new branch:

1. In Visual Studio Code, click on the current branch name at the bottom left corner of the window (it will probably say `master` or `main`).
2. In the pop-up window, click on "Create new branch" and enter a name for your branch (for example, `my-new-feature`).

<p align="center">
  <img src="/assets/img/step-5.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Step 5: Making Changes and Committing Them

Now you're ready to make changes to the project. You can open any file in the repository, make changes, and save the file. 

If you want to write a new article to bitcoiner.guide, you need to add a need file: 
1. Go to `file` > `new file`.
2. Keep it simple, if you write about Samourai Wallet then name the file `samourai`
3. End the file name with `.md`

It is important to keep things consistent in the project. Get inspiration from the countless articles, explore how they are structured and follow the naming conventions you observe.

If you want to add images, add the line of code embedded below. Modify the number in `max-width: 100%` to adjust the size of your images.

    <p align="center">
      <img src="/assets/img/NAME_OF_OUR_ASSET.png" class="responsive" style="max-width: 100%; height: auto;" />
    </p>

Once you've made your changes:

1. Click on the "Source Control" icon on the left sidebar or press `Ctrl+Shift+G`.
2. You should see a list of files you've changed. Enter a commit message in the text box at the top. This message should succinctly describe the changes you've made.
3. Click the checkmark at the top or press `Ctrl+Enter` to commit your changes.

### Step 6: Pushing Your Changes to GitHub

After committing your changes locally, you need to push them to your GitHub repository:

1. Click on the "..." (more actions) button at the top of the Source Control view.
2. Select "Push" from the dropdown menu.
3. If asked, sign in to your GitHub account.

This pushes your changes to your forked repository on GitHub, but they're still on your personal branch (`my-new-feature`), not the main branch.

### Step 7: Opening a Pull Request

The final step is to open a pull request, which proposes your changes to the original repository:

1. Go to your forked repository on GitHub (https://github.com/YourUsername/Bitcoiner.Guide).
2. Click on the "Pull request" button near the top of the page.
3. Click on "New pull request".
4. Click on "compare across forks" and make sure the base repository is the original Bitcoiner.Guide and the head repository is your fork. Also, ensure the base branch is `main` (or `master`) and the compare branch is the branch you created (`my-new-feature`).
5. Click on "Create pull request".
6. Enter a title and a description for your changes.
7. Click on "Create pull request".

Congratulations! You have successfully forked Bitcoiner.Guide, made a contribution, and opened a pull request.

Keep in mind that your pull request might not be accepted immediately. The maintainers of the original project may request changes or have questions about your contribution. It's important to stay open to feedback and be responsive to their comments. Remember, contributing to open source projects is not just about writing code, it's also about collaborating effectively with others.