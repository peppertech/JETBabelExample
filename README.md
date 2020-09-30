# JETBabelExample
### This is a sample project.  It is not supported in any way.  The code is delivered as-is with no claim of correctness, or continued support.

Make sure you have the ojet-cli already installed at a global level

Run this command from the root of the cloned project.

_ojet restore_

That will pull in all of the needed files and allow you to run ojet build/serve after it's done.

You can look in the package.json files to see what npm modules are being loaded for babel config.  They are all in the devDependencies section.

I've also modified the after_build.js and before_release_build.js hook scripts to run Babel at the appropriate times based on dev build or release build.

You can find these files in the /scripts/hooks folder if you want to see what configuration I'm running.

**This sample does not work with the live-reload feature of the JET CLI.  It will not re-run Babel when you edit a file and save it.**
