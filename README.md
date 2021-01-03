# website_stochsd

## Run and build project.

use cmd, not powershell.

see 
https://github.com/facebook/create-react-app/blob/master/README.md 
to run and build project.

## Update website (upload new homepage version)

run `npm run build`

this creates folder `build`

Login to FileZilla:

- host: `web.sourceforge.net` + credentials 

- copy `build` folder into `/home/project-web/s/st/stochsd/htdocs`

Rename folder `build` to `homepage` 