# VirtualWindow
A Virtual Window that recognizes hand gestures to open or close the window or to change the views.

<h1>Introduction</h1>
This tutorial explains how to create a Virtual Window using Leap Motion. It lets you create a virtual window on your wall by just waving your hand. You can create a window that shows you a warm sunny beach on a cold gloomy day or a window that takes you to your favourite vacation destination while you soak in the sights and sounds of a virtual vacation.

We wanted to create this project using gesture recognition technology. Gesture recognition is a rapidly growing technology and enables humans to communicate with machines and interact naturally without using any mechanical devices. We made use of different gestures like swipe, move hand to left or right to control various events like open the window, change the scenery, or close the window. 

The gesture recognition was made using “Leap Motion”. Once it recognises a hand gesture, it will send a signal to the projector which will then display a virtual window on the wall. We also added various sound effects to the scenery, like the sound of beach waves, birds chirping, etc. If you want to change the scenery all you have to do is swipe your hand over the Leap Motion sensor. 

<h1>The Connection</h1>
The Leap Motion is placed near the wall and is connected to the computer, and the computer is connected to a projector. The Leap Motion recognizes the hand gestures over it and javascript events are handled according to the gestures. The final display is then projected on the wall through the projector.

There Leap Motion recognizes four different gestures for opening the window, changing the scenery and closing the window:

<h1>The Code</h1>
We had to download the Leap Motion software and install the package. We created a HTML page with the window graphic, videos and audios. The HTML file contained a link to the leap.js file in the head tag.

The gestures were coded using Javascript and CSS animations and div changes were applied using JQuery.

First, there was a loop created to recognise if the hand was left or right:


