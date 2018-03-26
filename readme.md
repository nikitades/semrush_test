# The test social network app

A sample app to demonstrate my skills in React, Redux and JS in general.

## Installation notes

1. Checkout this repo to the desired folder
2. Run `npm install` in this folder
3. When npm finishes, run `npm run dev` to build the app in development mode and run the watcher. To run in production mode type `npm run prod`.
4. Open dist/index.html in your browser.

## General notes

##### Why haven't I used the IndexedDB technology to store the friends data?
At the very beginning I admitted the idea of a web worker doing the heavy stuff to be pretty interesting.
Also, the IndexedDB had in past couple of year some issues on mobile devices as well as differences in implementation among the browser vendors.
Anyway, these issues are not impossible to solve, and if the friends DB will need to scale some day, the IndexedDB is be a great tool to use.
Personally, I prefer this IndexedDB driver implementation: https://www.npmjs.com/package/idb

##### What was the hardest part
The History API. I had almost no experience working with it, so it was a little challenge. But that was really interesting to get things to work.

##### The spent time
As you can see through the commits history, writing the app code itself took something about a day. The webpack setting is a pleasure so I did it without the unnecessary haste.