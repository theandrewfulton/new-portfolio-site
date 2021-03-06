# Wireframe/mockup Planning

## Inspiration

### What I like so far:

https://mattfarley.ca/ - Wireframe graphics as a hero image, purple accent to break up page sections

https://caferati.me/ - materialising letter effect in the hero section. Really like the transition animation between pages but not sure how to go about doing this

http://www.emilyridge.ie/ - hover over projects is good but in this case very hard to read. I really like the navbar

https://pierre.io/ - footer with socials, cursor is cool but a bit distracting, I like the simple grey on black

https://denisechandler.com/ images rotate slightly when hovered over

https://benadam.me/ - so simple, so clean

https://jonny.me/ - hero becomes header

https://jacekjeznach.com/ - "lazy load" content, text animation. Skills word cloud!

### More inspiration if needed:

https://www.mockplus.com/blog/post/web-developer-portfolio

https://www.noupe.com/design/web-developer-portfolio-examples.html

https://www.codementor.io/learn-programming/12-important-things-to-include-in-web-dev-portfolios



## Features

frosted glass effect

gradient background??? - bit stuck on the background but would like blues and purples

would love to try and make Hero background colour become the header colour.

hamburger menu for mobile and horizontal navbar for tablet and desktop

One page or multiple page design?

grid or carousel for projects? - maybe grid for multi-page, carousel for one-page

I like the columns I have now but grid with extra information on hover might be the way to go.

Potential one-page:

- hero/basic introduction
- About/skills/resume
- projects
- blog
- contact

Home and About as one page?

Contact page with form - set up email address

Hover over image for Project information?

Split skills into 3 columns like Matt Farley for design, front-end and mentoring. Something like platforms, technologies/languages and work areas (pi, drones, photogrammetry etc.?)

Featured work on the homepage?

Footer with socials?

[css frosted glass](https://webdesign.tutsplus.com/tutorials/how-to-create-a-frosted-glass-effect-in-css--cms-32535)

### Notes now that I'm working on it

viewheight has gone all weird again. Investigate when refactoring

add components for common colours

create component for handling background-blur workaround?

create component for desktop vs mobile logic?

Error when page doesn't exist + tests

Edit index.html in public to remove template comments

#### Navbar

bump navbar to top with some kind of animation when scrolling down?

red on top layer frosted glass around desktop navbar?

turn navbar from red to default blue/purple on scroll?

Mobile navbar has my name as a wordmark and condenses to AF in the corner on scroll?

scroll up and border around navbar disappears?

close mobile navbar after clicking link - handle click?

adjust transparency down for mobile navbar - poor contrast on Contact page

BUG - close menu button returns to homepage instead of staying on current page

#### About

Show all 3 showcase sections side-by-side or one vertically, never 2.

#### Footer

script to update copyright year

#### Projects

Individual Project pages or links to gitHub?

Allow 2 cards in a column on projects page but not on about page?

#### Social Media

social media button section on every page

#### Contact

Bad overlap at 300px width - including error and success messages



#### Layout/Spacing

each "layer" above background has same border width in to the previous layer

Some spiel on the Contact page to take up space?

#### Showcase Component

h570

react component that takes a param to adjust width and height based on whether it's a project showcase or about section?

Showcase component is most of the viewport height on mobile (at least for really small screens, then a certain size that accomodates all my content)

#### Colours and Gradients

It all looks a bit dead... Maybe experiment with colour?

do the glassy cards need a gradient through them?

Draft background #270362

Blue dot #0216C9

I'd like the background to be a nice purple/blue colour

current gradient: 200833 - 110026

corner radius is now 15

#### Fonts:

Should fonts look etched/printed on the glass?

Wordmark: Caveat

Headings: Raleway

Body: Raleway or Roboto Slab or Roboto? The full mockup cureently shows Roboto Slab

### Libraries

[react-scroll](https://www.npmjs.com/package/react-scroll) if I decide to make it one page

[particles.js](https://vincentgarreau.com/particles.js/) for some more dynamic content...

[React icons](https://react-icons.github.io/react-icons/)

[emailJS](https://www.emailjs.com/)

material ui

Shards React

[Starting point to building more in react](https://kinsta.com/blog/javascript-libraries/)

styled-components

tailwindcss

https://ui.glass/generator/

[react-acrylic](https://github.com/damaera/react-acrylic)

[frosted-glass](https://www.npmjs.com/package/frosted-glass)

### Link to Figma file

https://www.figma.com/file/am1oeEiXQoFJjtFyFQZexB/New-Portfolio-Site?node-id=0%3A1

