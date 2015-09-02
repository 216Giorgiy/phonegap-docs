---
title: Template
url: references/phonegap-cli/template-list
github_url: https://github.com/phonegap/phonegap-docs/blob/master/docs/references/phonegap-cli/template.html.md
layout: subpage
---

Use the `template list` commands to get a listing of the templates available for use when creating your applications with the `create` command. 
Some templates available include a `blank` template, a `hello-world` template or one based on jQuery Mobile. Once you choose a template, specify
 it using the `--template` (or the alias `--recipe`) option followed by the name of the template.  
  
###Usage
    phonegap template list

###Examples

  $ phonegap template list
  $ phonegap create myApp --template hello-world
  $ phonegap create myApp --recipe hello-world