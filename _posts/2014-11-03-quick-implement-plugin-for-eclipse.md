---
layout: post
title: Quick Implement plugin for Eclipse
tags: eclipse java
image: /images/quick-implement.png
---

If you use Eclipse for Java development, you're probably familiar with the magic `Ctrl+1` hotkey that provides all sorts of context-sensitive suggestions. One of the actions missing from the standard Java IDE is to quickly implement an interface when the cursor is hovering over its declaration. I tend to do this quite often, so I ended up writing a plugin for it.

The Quick Implement plugin extends the Java editor and provides actions to quickly implement an interface or extend a class. These actions are triggered by the standard quick assist shortcut (`Ctrl+1`) while the cursor is over an interface or class declaration.

![Screenshot](/images/quick-implement.png)

[View on GitHub](https://github.com/lmadhavan/quickimplement-eclipse-plugin){:.button}
