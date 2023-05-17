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

If you're new to the world of open-source software, learning how to fork a project, contribute to it, and open a pull request can seem daunting. However, don't worry! This guide will walk you through every step of the process. Using Bitcoiner.Guide as our example, we will write an article and propose oour changes be incorporated into the original project.

### Step 1: Setting Up a GitHub Account and Installing Necessary Tools

This step ensures you have all the necessary tools installed on your computer.

1. **A GitHub Account**: An account on GitHub is needed to fork the project and submit your changes. If you don't have one yet, create an account on [https://github.com](https://github.com).

2. **Git**: Git is a version control system that lets developers track and manage changes to their code. It's essential for working with GitHub. Download and install it from [https://git-scm.com](https://git-scm.com).

3. **Visual Studio Code**: This is a versatile text editor with built-in features that make working with Git easier. Download it from [https://code.visualstudio.com](https://code.visualstudio.com).

4. **Ruby and Bundler**: The Bitcoiner.Guide project uses Jekyll, a static site generator built in Ruby. As such, you need Ruby to run the project locally. Bundler is a Ruby gem that manages other Ruby gems in a project. To install these:
   
   - **For macOS and Linux users**: 
      - Ruby usually comes pre-installed. To check, open your terminal and type `ruby -v`. If it's installed, this will return the Ruby version.
      
   - **For Windows users**:
      - You can download Ruby from [RubyInstaller](https://rubyinstaller.org/). After installation, it will also allow you to install MSYS2, which you should do.
      - Install Bundler by opening "Start Command Prompt with Ruby" from your start menu, then type `gem install bundler`.

### Step 2: Forking Bitcoiner.Guide

Forking creates a copy of a repository in your own GitHub account. This allows you to make changes without affecting the original project. Here's how you fork Bitcoiner.Guide repository:

1. Navigate to [https://github.com/BitcoinQnA/Bitcoiner.Guide](https://github.com/BitcoinQnA/Bitcoiner.Guide).
2. Click on the "Fork" button at the top right of the page to create a copy of the project in your account.

<p align="center">
  <img src="/assets/img/step-1.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Step 3: Clone the Project to Your Local Machine

Now, we need to get a copy of the project on your computer, or "clone" it.

1. Go to your fork of the project. The URL should be `https://github.com/YOUR_USERNAME/Bitcoiner.Guide`
2. Click the green "Code" button, then click the clipboard icon to copy the URL.
3. Open Visual Studio Code.
4. Click on the "Source Control" button on the left panel (it looks like a branch with a circle around it).
5. Click on "Clone Repository".
6. In the dialog box that pops up, paste the URL you copied, and press Enter.
7. When asked to select a directory, navigate to your desktop and click "Select Repository Location".

### Step 4: Creating a New Branch

Creating a new branch helps isolate your changes from the main (often called `master` or `main`) branch. This is useful when working on multiple different features or bugs at the same time. Here's how to create a new branch:

1. In Visual Studio Code, click on the current branch name at the bottom left corner of the window (it will probably say `master` or `main`).
2. In the pop-up window, click on "Create new branch" and enter a name for your branch (for example, `foundation-article`).

<p align="center">
  <img src="/assets/img/step-5.png" class="responsive" style="max-width: 100%; height: auto;" />
</p>

### Step 5: Set Up the Project Locally

Once the project is cloned, we need to set it up on your computer.

1. Open Visual Studio Code. Click on "File", then "Open...".
2. Navigate to your desktop and select the Bitcoiner.Guide folder.
3. Open the terminal in Visual Studio Code (View -> Terminal).
4. Run `bundle install` to install the necessary Ruby gems for the project.
5. Run `bundle exec jekyll serve` to start a local server. You can now view the site at [http://localhost:4000](http://localhost:4000).

### Step 6: Making Changes and Committing Them

Now it's time to modify the project. We'll add a new article called "Foundation Devices":

1. In Visual Studio Code, create a new file with the format: `foundation-devices.md`.
2. At the top of the file, add the following metadata:

```yaml
---
layout: page
title: Foundation Devices
subtitle: Sovereign computing company
#cover-img: /assets/img/path.jpg
share-img: https://bitcoiner.guide/assets/img/foundation-devices-logo.png
---
```

3. Start writing your article below the metadata. Save the file and view your changes by refreshing your browser.

### Step 7: Pushing Your Changes to GitHub

This step saves your changes and uploads them to GitHub.

1. Click on the source control icon on the left side of Visual Studio Code (it looks like a branch with a circle around it).
2. You should see your changes in the "Changes" section. Click the "+" icon next to your files to stage your changes.
3. Enter a commit message in the text box at the top, such as "Added Foundation Devices article", and press Ctrl+Enter (or Cmd+Enter on a Mac).
4. Click on the three dots at the top of the Source Control view and select "Push" to upload your changes to GitHub.

### Step 8: Opening a Pull Request

Finally, to propose that your changes be incorporated into the original project:

1. Go to https://github.com/YOUR_USERNAME/Bitcoiner.Guide
2. Click the "Pull request" button.
3. Click "New pull request".
4. Ensure the "base repository" is BitcoinQnA/Bitcoiner.Guide and the "head repository" is YOUR_USERNAME/Bitcoiner.Guide
5. Click "Create pull request".
6. Enter a title and description for your changes.
7. Click "Create pull request" again.

Congratulations! You have successfully forked Bitcoiner.Guide, made a contribution, and opened a pull request.

### Additional Resources
- [How to make a pull request on an open source project](https://www.youtube.com/watch?v=8A4TsoXJOs8) – Web Dev Cody.