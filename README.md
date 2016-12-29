# Portfolio Site Project Overview
The project submission shows a simple portfolio website built with simple HTML and CSS, and using parts of the bootstrap framework. The project rubric asked us to recreate a version of this design mockup: file:///C:/Users/User/Desktop/design-mockup-portfolio.pdf.

For fun, I recreated the mockup format, but used fruit wallpaper and single fruit watercolor images rather than the images provided for the mockup. Because this portfolio site is meant to be used later in the program to showcase my work, I can update the fruit images with relevant images created in the course. 

NOTE: I found the images on google, and do not have rights to use them in any commercial capacity. I am using them solely as a learning exercise.

# How I Created this "Portfolio" Site
The HTML and CSS udacity module covers a lot of ground, including how to code HTML and CSS; how to build responsive sites; how to manage the gruntwork (pun intended) of creating responsive images, minifying files, etc.; and how to understand and work with responsive and bandwidth-sensitive images. 

Though the module covered more ground than the rubric itself (which asked that we create a responsive website with some custom design and valid HTML and CSS), I employed many of the lessons learned throughout the course in this portfolio site. 

Responsive Design
* To create responsive HTML and CSS, I used the bootstrap framework. I found the framework easy to work with, and only used the parts relevant to the design I wanted to create. 
* I employed media queries to center the text at the top of the page once the viewport shrunk below 500px
* I used the picture element to not only serve up 1x and 2x images for different screen resolutions, but to show a different image for when the viewport shrunk below 500px. (I really loved this trick when I saw it in the course, so I thought I'd use it.)

Responsive Images
* Because the images I used were rather large, I employed grunt and imagemagick to shrink the files to more management sizes
* I used the picture element and srcset to serve the different images based on different settings (I know a lot more can be done here, but I used one technique to show knowledge)

Site Design
* I mainly followed the design of the mockup provided, but added a few original elements learned from the program, including: centering text in CSS, using object-cover to hide an image within a container, and of course using the picture element to provide alternate images when the viewport is below a 500px

# How to View the Project
1) Into one folder on your local machine, download:
* The index.HTML file
* The bootstrap folder
* The images folder
2) Open the index.HTML file in your browser
3) Additionally, to see the grunt file code used, you can download gruntfile.js 
