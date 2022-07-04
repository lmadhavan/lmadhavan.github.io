---
layout: post
title: "SimpleStream: a simpler way to use Java 8 Streams"
tags: java
---

When Java 8 came out last year, it finally introduced lambdas, a much-awaited language feature, and along with it, a new way to manipulate data in the form of streams. While streams make it significantly easier to perform aggregate operations on collections, common tasks still involve boilerplate code that could easily be eliminated. For example:

```java
// Collect names into a list
people.stream().map(Person::getName).collect(Collectors.toList());
 
// Compute sum of salaries
employees.stream().collect(Collectors.summingInt(Employee::getSalary)));
```

Wouldn't it be nicer to write something like this instead?

```java
// Collect names into a list
stream(people).map(Person::getName).toList();
 
// Compute sum of salaries
stream(employees).map(Employee::getSalary).sumAsInt();
```

SimpleStream is a wrapper around Java 8 Streams that lets you write more concise code, like in the above example. It's a single Java file that you can drop into your project and start using immediately.

[View on GitHub](https://github.com/lmadhavan/simplestream){:.button}
