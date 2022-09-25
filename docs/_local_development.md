Local Development on Windows
----------------------------

All of this is optional - but highly recommended that you understand

### Package management and local (windows) tools
* [chocolatey.org](https://chocolatey.org/)
    * The Package Manager for Windows
    * WindowsKey + X -> Windows Powershell (Admin)
        * copy and paste the big shell line from - [Installing Chocolatey](https://chocolatey.org/install) -> "Now run the following command:"
    * ```powershell
        choco feature enable -n allowGlobalConfirmation
        choco install python3 node
        ```
    * ```cmd
        npm install cypress@10.3.0
            # `npm install` installs to `node_modules` in your current folder!
        set CYPRESS_BASE_URL=http://localhost:8001/?api=http://localhost:8000
            # set an environment variable for the duration of this terminal (for each new terminal you open)
        npx cypress open 
            # --e2e --browser electron
            # or run headless
        npx cypress run --spec cypress/integration/*.cy.js
        ```

### Docker (on windows)
* Docker on windows
    * [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux)
        * I think it's easier now - you used to have manually turn on HyperV
    * `choco install docker-desktop`
    * [windows-terminal-preview](https://www.microsoft.com/en-gb/p/windows-terminal-preview/9n8g5rfz9xk3#activetab=pivot:overviewtab)

### GUI's from WSL2 and docker containers
* WSL2 and `vcxsrv` (An X11 server) for linux GUI's
    * [Running WSL GUI Apps on Windows 10](https://techcommunity.microsoft.com/t5/windows-dev-appconsult/running-wsl-gui-apps-on-windows-10/ba-p/1493242)
    * Windows
        * ```bash
            choco install vcxsrv
            # start XLaunch -> `Disable access control`
            ```
    * WSL bash
        * ```bash
            echo xfce4-session > ~/.xsession
            export DISPLAY="`grep nameserver /etc/resolv.conf | sed 's/nameserver //'`:0"
            echo $DISPLAY
            sudo apt install gedit
            gedit
            ```
