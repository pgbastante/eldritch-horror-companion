# Eldritch Horror Companion Web-APP

MEAN Web App to help generating random elements during a gaming session of the board game Eldritch Horror

The main goal of the App is to avoid spending time drawing cards until you found one of the type you need, and then shuffle all the cards. I think this will help players to reduce the time of the play sessions by just saying what card to look for.

# How to use the app

First arrange all the cards by type and sort them in alphabetical order, you can use the list of cards from the app to help you.

Then just use the app to tell you what card to look for. E.g, you need to find a Status - Injury, you select the parameters in the app and it tells you that you got a Head Injury. Then, you just need to go to the pile of statuses, find the Head Injury cards and choose one of all that are still available.

You can configure what expansions of the game you have so you don't get cards you don't have.

Hope this helps, any ideas and help are welcome.

#TODO

* Change RandomItemGeneratorProvider to a Factory provider
* Add all items to the database (english)
* Main menu smooth transitions
* General styling
* Refactor gulpfile to ecmascript 6
* Add a gulp task to set the target value of the english translation as the source
* Add option to randomly setup a game (select the number of players, with or without prelude...) and returns the number
selected investigators, an elder god and a prelude card. It will also tell you if you need to prepare a special deck or
game board depending on the result
* Compile a database of the game rules and faqs, with the ability to search anywhere 
* Add images for all locations
* Add images for all cards
* Find or make better images for the skills icons
* Create a list of items
* Create a discard pile function. When a card is randomly generated you can choose to take it to the discard pile. In that case, that card would not be drawn again by the generator.
* Create specific views for each of the items (cards, investigators and ancient-ones)
* MAKE TEST!!!