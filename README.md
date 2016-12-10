# React-Native-Waterfall-View
A simple waterfall-view by react native, using View, Text, Img and some other basic components.

![image](https://github.com/baddif/React-Native-Waterfall-View/blob/master/Screenshot.jpg?raw=true)

Tested on Android, but I think iOS should be fine too:)

Pages/WaterfallPageView.js is a simple test page, while if it was to be used, some images should be placed correctly in dirs described in 'window.tmpData' fields.

How to use:
```JavaScript
<WaterfallView ref='waterfallView' number='2' bgColor='#F5FCFF' />
```
number: count of columns for waterfall. 

bgColor: background color for views and seperators between columns.

Components/WaterfallItem.js and Components/ImgAdapter.js are simple items defined to display images correctly. Write your own items to replace these files, while the 'getHeight()' method must be implemented in the item.

I cannot find a way to display image scale to the size of the image on Android, so I provide 'ratio' for each image...lol.
