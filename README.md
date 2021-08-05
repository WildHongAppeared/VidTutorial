# VidTutorial
Video tutorial API

## Prequisites
- Required library
  1) NodeJS 14
  2) Yarn 1.22 or above
---
## Assumptions
- Input will be in csv format as show below 
```
3,4
1,Mathematics Chapter 1,Mathematics,
2,Mathematics Chapter 2,Mathematics,
3,Mathematics Chapter 3,Mathematics,
```
- The program will only use input.csv under the root directory as input. A sample working file has been provided in the root directory
- The program will read from the file and log the output as text in the console that it is run on. There is no user interaction required in the program
- The program only accepts numeric on the first column as input
- The program only accepts alphanumeric string on the second column as input
- The program only accepts alphanumeric string on the third column as input
- The program only accepts image url strings in the fourth column as input
---
## Design Decisions
- Input are in csv instead of plaintext as it is more easily readable by a person in case of large quantities of data (Read as excel format). Also allows for easier parsing of data format

---
## Steps to run
- Install NodeJS [For Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
- Install Yarn [For Ubuntu](https://www.linuxcloudvps.com/blog/how-to-install-yarn-on-ubuntu-16-04/)
- run `yarn install` on the root directory of the program
- run `yarn start` to run the program
---
## Steps to run unit test
- Install NodeJS [For Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) (Can be skipped if already done in Steps to run)
- Install Yarn [For Ubuntu](https://www.linuxcloudvps.com/blog/how-to-install-yarn-on-ubuntu-16-04/) (Can be skipped if already done in Steps to run)
- run `yarn test:class` on root directory of the program
