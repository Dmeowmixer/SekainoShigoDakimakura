WIP
run npm i (requires node version v0.10.13 to install gulp-sass)
to run, in root directory type gulp starts on localhost:4000

------------------   Sekai no Shigo Dakimakura  -----------------
    Index
      Index
      Game Design
        Summary
        Gameplay
        Mindset
      Technical
        Screens
        Controls
        Mechanics
      Level Design
        Themes
          Ambience
          Objects
            Ambient
            Interactive
          Challenges
        Game Flow
      Development
        Abstract Classes
        Derived Classes
      Graphics
        Style Attributes
        Graphics Needed
      Sounds/Music
        Style Attributes
        Sounds Needed
        Music Needed
      Schedule


      -----Game Design----

Summary
  You wake up in a unfamiliar place, surrounded by strangers. Your last memory is going to sleep in your parents basement after a night of marathoning DragonBall.  You see your parents in the corner huddled together by a fireplace and question them. You are told there was a nuclear war and was carried here (The Subway Tunnels) by your father, you have been asleep for 3 days. You frantically look around and realize that they have left your beloved Dakimakura (Anime girl body pillow) behind. As a true otaku, your only option is to leave the sanctuary of the tunnels and rescue your waifu (girlfriend). Your parents look at your strangely and wish you the best of luck and say their goodbyes. You are armed with your DragonBallZ shirt and boxers as you set out into the unknown.

      --------Gameplay---------
  The goal of the game is to survive and return to the Subway Tunnels with your body pillow.

Mindset
  The player is an average sized male who has watched too many episodes of Naruto and thinks he knows ninjutsu. However his absolute belief in his abilities gives him no special powers at all.

    -------Technical-------
  Screens
    Title Screen
      a. Title of the game, Start Game, Click Me!(Credits).
      b. Battle screens
      c. World map view
    Game
      Inventory 
        6 slot maximum
      Player Equipment
      Player Skills  
      Assessment / Next Level
V2      Would like player to continue playing to gather better equips, body pillows and have monster levels scale to players level.
  Controls
    Controls will be text driven choices. Battles will be dealt with in a minigame fashion randomly. 
      v1 Rock, Paper, Scissors
      v2 Mouse 1 Click battle (number of times player can click mouse 1 vs PC generated number)
      v3 Stepmania battle
  Mechanics
    Would like gameplay to be similar to Kingdom Of Loathing.


---------Level Design--------------

Themes
  Populated Underground Subway Tunnels
    Mood
      Firelit, Cold, Ridden with starvation and radiation fallout.
    Objects
      Ambient
        Semi Mutated Rats
        Garbage
        People
      Interactive
        V2 Armor Vendor
        V2 Weapon Vendor
        V2 Parents
        v2 Jewelry vendor
        v2 Nike shoes vendor
  Unexplored Subway Tunnels
    Mood
      Dark as shit, SCARY AS SHIT, Mutated animals.
    Objects
      Ambient
        Intelligent Roaches who can speak.
        Radiation fallout
        Broken Subway cars         
      Interactive
        Mutated Giant rats
        Mutated Humanbeings


--------------Game Flow------------
 1. Player starts in populated subway tunnels
 2. Option to go aboveground or travel through subway tunnels (Both take you to the same end location just different encounters and monsters).
 3. Player reaches house which has been taken over by 10 mutated human men who have all married his body pillow. 
 4. Player unlocks Kaio-Ken x1 ability and battles them.
 5. Player starts adventure back to subway choosing above ground or through subway tunnels however his body pillow is attracting enemies.
 6. Player reaches the Populated subway tunnels to complete game (v1)
 7. V2 Player has option to continue game to gather equipment and farm money.




---------Development-----------
  Abstract Classes / Components
      BasePlayer  
      BaseEnemy
        Mutated Rats WITH HANDS
        Mutated Humans
      BaseObject
    BaseObstacle
      Mutants standing in his way.
    BaseInteractable
      Abilities
        Self Buffs 
          Kaio-kenx1
          Nerd Rage ability
      ITEMS
        Weapons
          Melee Weapon
        Consumables
          Energy Drink (Health Potion)
     V2 NPCs
        Vendors
          Armor vendor
          Weapon vendor
        Parents
