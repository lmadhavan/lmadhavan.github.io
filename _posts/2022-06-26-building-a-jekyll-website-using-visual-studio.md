---
layout: post
title: "Building a Jekyll website using Visual Studio"
tags: jekyll visual-studio
---

I recently migrated my website to [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/). Jekyll, in case you aren't familiar, is a popular static site generator that takes Markdown content and renders it through templates to produce static pages, which you can then upload to a hosting service such as GitHub Pages.

I'm someone who likes to use an IDE whenever possible, and if you're a Windows developer like me who happens to have Visual Studio installed, then you've already got an excellent dev environment for Jekyll. A lightweight editor such as Visual Studio Code will work just as well, if not better, but I already had Visual Studio, so that's what I used.

 Once you've bootstrapped your Jekyll website (see [Jekyll documentation](https://jekyllrb.com/docs/) for instructions), simply right-click your website folder in File Explorer and select *Open in Visual Studio*. Out of the box, you get support for most of the file types you will be dealing with, including HTML/CSS, `_config.yml` and `Gemfile`. The two quality-of-life improvements that I made were related to Markdown support and a custom task for launching a local server.

### Markdown support
Most of the content in a Jekyll website is typically authored using Markdown, however the built-in Markdown support in Visual Studio is somewhat lacking. This is easily fixed by grabbing the excellent [Markdown Editor](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor) extension from the Visual Studio Marketplace, which improves syntax highlighting and adds live preview.

***Note:** VS Code supports these features out of the box, no extension needed.*

### Custom launch task
Jekyll provides an easy way to test your website locally by running `bundle exec jekyll serve`. I created a custom launch task for this so I could fire up the server without leaving the IDE. To do this, right-click any file in Solution Explorer and select *Configure Tasks*. In the `tasks.vs.json` file that opens up, replace the **tasks** section with the following:

```json
"tasks": [
    {
      "taskLabel": "Local Server",
      "appliesTo": "*",
      "type": "default",
      "command": "${env.COMSPEC}",
      "args": [
        "bundle exec jekyll serve"
      ]
    }
]
```

Now, when you right-click any file in Solution Explorer, you should see a *Run Local Server* option. Clicking this will launch the server and Jekyll logs will go to the Output pane. You can continue editing files in the IDE and Jekyll will automatically pick up any changes. The server will terminate when you close Visual Studio; if you need to do this manually (for example, if you make changes to `_config.yml`), select *Build > Cancel* from the menu or use the `Ctrl+Break` shortcut.

***Note:** VS Code uses a nearly identical `tasks.json` file for custom tasks. See the [documentation](https://code.visualstudio.com/docs/editor/tasks#_custom-tasks) for more details.*
