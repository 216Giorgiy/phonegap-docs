<link href="../css/styles.css" rel="stylesheet">
<link href="../css/bootstrap.css" rel="stylesheet">

##Step 1: Install the PhoneGap CLI 


<hr>
###Requirements

- [node.js](http://nodejs.org/) - a server based app platform
- [ios-sim](https://github.com/phonegap/ios-sim#installation) - iOS simulator for iOS development (Mac only)
- [git](http://git-scm.com) - used in the background by the CLI to download assets. It comes pre-installed on some operating systems, to see if you already have it installed, type `git` from the command line. 

###Install Steps

1. Install the PhoneGap CLI via `npm`:

	`$ npm install -g phonegap`
	
    <div class="callout callout-help"> <button class="btn-help">Tip</button> OSX Users may need to prefix this command with `sudo` to allow installation to restricted directories.
		`$ npm install -g phonegap`</div>
2. Test it out by typing `phonegap` on the command line and ensure you see the following `help` text display:

        $ phonegap
        Usage: phonegap [options] [commands]
        Description:
           PhoneGap command-line tool.
           Commands:
              help [command]       output usage information
              create <path>        create a phonegap project
              ...


<hr>
That's it! You are now ready to move on to the next step and start building your first app!
<hr>
<a href="install-guide.html"><button class="btn">Previous</button></a><a href="developer-install.html"><button class="btn" style="float:right">Next</button></a>