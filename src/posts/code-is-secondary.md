---
title: Code is Secondary
date: 2019-01-14
tags: [ architecture ]
---

Computer languages are a source of arguments and indecisiveness among new software developers. Whether the classic "my language is better than your language", or simply being overwhelmed by choice, it's easy for those of us in the industry to forget about one of the most fundamental ideas in software engineering. Code is secondary. The syntax that comprises a computer application is exacting, scrutinized and reviewed beyond belief, but it is not the product.

Taking a view from 10,000 feet, software is a set of processes built to apply mathematic concepts to a real-world problem. People wanted to be able to share information instantaneously, so we developed a set of protocols and algorithms to facilitate that. For example, take [RFC 2616](https://tools.ietf.org/html/rfc2616), the HTTP1.1 specification. Reading through this document you will see definitions of jargon and descriptions of processes, but no actual computer code. Why is that?

## The Role of Language

Computer languages all share the goal of allowing people to instruct a computer as quickly and efficiently as possible (no, not you [Malbolge](https://esolangs.org/wiki/malbolge)). To do this, you need to create a program that can read a file (or set of files) produced by a human and translate that into a few, basic instructions. You might be familiar with `x86_64`, `x86`, and `ARM` processor architectures. These chipsets are essentially an interface, and each chip comes pre-equipped with the knowledge of a slight set of instructions. You can normally load data into registers, perform basic arithmetic on the data in registers, perform conditional jumps to other parts of the program, and read/write to memory. The exact instructions vary from arch to arch, but normally there are very few (note - Assembly is not the lowest level of computer instruction, Assembly code is converted to raw numeric input by an Assembler).

The task at hand for language-builders seems pretty straightforward, then. Construct a set of syntactic rules that, at some point, become Assembly. From there the assembler can take care of the rest. Simple enough, until you realize that _no one syntactic system is ultimately suited for every task._ Python is fantastic for creating very expressive, easy-to-read code that runs fairly quickly, but what happens when you are faced with the harsh reality of physics within an embedded system? Then you need an exacting toolset, such as C, C++, or Rust. These purely syntactic differences are not taking into account execution environments, such as Kotlin or C# compiling to Assembly for an imaginary machine (the JVM and .NET runtime, respectively). These variations in levels of abstraction over the host machine and expressiveness are very important to think about if you _need those features_.

When developers talk about their preferred language, it's usually the first one you learned. Any language can be made to do any task, it's only a matter of effectively min-maxing language features with ease on the developers. Code is made for humans to read. Otherwise we would just write Assembly.

## Code Is Not the Product

Let's roll back to that question about RFC 2616. Why is there no code listed in the specification? HTTP is exclusively designed to be used by computers, so why wouldn't the authors include some examples?

RFC 2616, and all other specifications like it, can be implemented in any computer language, with any programming stack. It quite literally doesn't matter _what_ you use to build it, what matters is that the thing is built correctly. HTTP libraries exist for pretty much every popular language and due to them being based on the same specification, each of them can communicate with each other.

This is the ideal of software development. The reason that you should not touch a keyboard until _at least_ your minimum viable product is fully planned out and reviewed. Once you have a plan in place, you can implement that set of instructions in any language that suits your needs or even just what your engineers like to use. Code is vital, but disposable. With a proper spec, you can recreate anything over and over again.

I hope this piece helped you see my point of view on the role of language in software engineering. If you disagree with me or are interested in speaking more about this (I can go on for days), send me a message over Twitter or e-mail so we can have a chat!

