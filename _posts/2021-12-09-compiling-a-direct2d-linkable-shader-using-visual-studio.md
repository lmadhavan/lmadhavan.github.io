---
layout: post
title: "Compiling a Direct2D linkable shader using Visual Studio"
category: Programming
tags: direct2d shader visual-studio
---

Effect shader linking is a Direct2D optimization that links multiple shaders together so that they can be rendered in a single pass. If you're writing custom shaders, you want to ensure that they are linking compatible in order to take advantage of this optimization. The [official documentation](https://docs.microsoft.com/en-us/windows/win32/direct2d/effect-shader-linking) explains how to author and compile such effects, however the default HLSL build in Visual Studio does not provide support for linking-compatible shaders. Instead, you need to configure a custom build step to do this, which is what this post will walk you through.

### Step 1: Create a batch script to compile the shader

First, create a batch script in your Visual Studio project that will execute the two-step process to compile a linking-compatible shader, let's call it `buildshader.bat`:
	
```batchfile
fxc %1.hlsl /nologo /T lib_4_0 /D D2D_FUNCTION /D D2D_ENTRY=main /Fl %1.fxlib /I %2
fxc %1.hlsl /nologo /T ps_4_0 /D D2D_FULL_SHADER /D D2D_ENTRY=main /E main /setprivate %1.fxlib /Fo:%1.cso /I %2
```

This is taken straight from the official documentation, except I've introduced a couple of parameters so it can be used as a custom build tool. The first is the input file and the second is the SDK include directory (which is required for the *d2d1effecthelpers* include that you will be using in your shader). The outputs of this script are a .fxlib file (intermediate file) and a .cso file (final linking-compatible shader output).

### Step 2: Configure a custom build tool for the HLSL file

Next, for each HLSL file in your project, open up the property page and make the following changes:

**Item Type**\
Custom Build Tool

**Command Line**\
`buildshader "%(Filename)" "$(UM_IncludePath)"`

**Outputs**\
`%(Filename).fxlib;%(Filename).cso`

**Additional Dependencies**\
`buildshader.bat`

![Custom build settings](/images/vs-shader-build.png)

The outputs and additional dependencies let the build system know when to trigger a rebuild of the input file. You can read more about these options in the [Visual Studio documentation](https://docs.microsoft.com/en-us/cpp/build/specifying-custom-build-tools).

And that's it! Your shaders will be automatically (re)built as part of the standard Visual Studio build process. If you want to look at an actual example, check out the [Fotografix repository on GitHub](https://github.com/lmadhavan/fotografix/tree/master/Fotografix.Shaders).