# Picture library (A1 Kids)

Every picture already used in a lesson, by label. Before making a new picture, check here.

Reuse in a new lesson: write the slot with the label and no picture, then fill it from this list:

```jsx
<Pic src={null} label="bedroom" size={110} onZoom={onZoom} />
```

```
node scripts/pictures.mjs fill --dry   # show what would be filled
node scripts/pictures.mjs fill         # fill matching labels
node scripts/pictures.mjs index        # rebuild this list after adding pictures
```

Labels that have no match stay empty and need a new picture. The label must match exactly (case does not matter).

179 labels.

| Label | Picture | Times used | Other pictures used for this label |
|---|---|---|---|
| a busy room | `/curriculum/u10-scenes/busy-room.jpg` | 1 |  |
| a busy zoo scene | `/curriculum/u9-scenes/busy-zoo.jpg` | 1 |  |
| a child | `/curriculum/u11-l5/child.jpg` | 1 |  |
| a new animal scene | `/curriculum/u9-scenes/pets-garden.jpg` | 1 |  |
| a new daily-life scene | `/curriculum/u12-routines/daily-life-scene.jpg` | 2 | `/curriculum/u12-routines/school-yard.jpg` |
| a new playtime scene | `/curriculum/u11-l5/playtime-scene.jpg` | 2 | `/curriculum/u11-l5/playground.jpg` |
| a new zoo scene | `/curriculum/u9-scenes/feeding-time.jpg` | 1 |  |
| a school bag | `/curriculum/u7-l1/bag.avif` | 1 |  |
| a zoo scene | `/curriculum/u9-scenes/zoo-path.jpg` | 1 |  |
| alligator | `/curriculum/u1-l1/alligator.jpg` | 2 |  |
| an action | `/curriculum/u11-l5/action.jpg` | 1 |  |
| an unfamiliar room | `/curriculum/u10-scenes/study-room.jpg` | 1 |  |
| another zoo area | `/curriculum/u9-scenes/zoo-area.jpg` | 1 |  |
| ant | `/curriculum/u1-l1/ant.jpg` | 3 |  |
| apple | `/curriculum/u8-l1/apple.jpg` | 18 | `/curriculum/u1-l1/apple.jpg` |
| arms | `/curriculum/u6-body/arms.png` | 2 |  |
| bag | `/curriculum/u7-l1/bag.avif` | 9 | `/curriculum/u1-l4/bag.avif` |
| ball | `/curriculum/u11-l1/ball.jpg` | 37 | `/curriculum/u10-l1/ball.jpg`, `/curriculum/u1-l1/ball.jpg` |
| banana | `/curriculum/u8-l1/banana.jpg` | 21 | `/curriculum/u1-l1/banana.jpg` |
| bat | `/curriculum/u6-words/bat.png` | 2 |  |
| bathroom | `/curriculum/u10-rooms/bathroom.jpg` | 6 |  |
| bear | `/curriculum/u1-l1/bear.jpg` | 2 |  |
| bed | `/curriculum/u10-rooms/bed.jpg` | 5 |  |
| bedroom | `/curriculum/u10-rooms/bedroom.jpg` | 11 |  |
| bird | `/curriculum/u9-l1/bird.png` | 2 |  |
| blank funny character | `/curriculum/u6-characters/mystery-2.png` | 1 |  |
| board | `/curriculum/u7-objects/board.png` | 6 |  |
| book | `/curriculum/u7-objects/book.png` | 16 |  |
| bouncy ball | `/curriculum/u1-l1/ball.jpg` | 1 |  |
| brother | `/curriculum/u5-family/brother.jpg` | 24 |  |
| brush my teeth | `/curriculum/u12-routines/brush-teeth.jpg` | 2 |  |
| car | `/curriculum/u11-l1/car.avif` | 14 | `/curriculum/u1-l1/car.avif` |
| cat | `/curriculum/u4-l1/cat.jpg` | 37 | `/curriculum/u9-l1/cat.jpg`, `/curriculum/u1-l1/cat.jpg` |
| cat sitting | `/curriculum/u3-l3/cat-sitting.avif` | 1 |  |
| chair | `/curriculum/u7-objects/chair.png` | 7 |  |
| character a | `/curriculum/u6-characters/char-a.png` | 4 |  |
| character b | `/curriculum/u6-characters/char-b.png` | 4 |  |
| character c | `/curriculum/u6-characters/char-c.png` | 3 |  |
| character with big eyes | `/curriculum/u6-characters/big-eyes.png` | 1 |  |
| character with long legs | `/curriculum/u6-characters/long-legs.png` | 1 |  |
| child | `/curriculum/u4-l1/child.jpg` | 1 |  |
| child at a party | `/curriculum/u4-l5/party.jpg` | 1 |  |
| child holding a broken toy | `/curriculum/u4-l3/angry-broken-toy.png` | 1 |  |
| child opening a present | `/curriculum/u4-l3/happy-present.png` | 1 |  |
| child who dropped ice cream | `/curriculum/u4-l3/sad-dropped-icecream.png` | 1 |  |
| child yawning | `/curriculum/u4-l5/yawning.jpg` | 1 |  |
| classroom scene | `/curriculum/u7-scenes/kids-sharing.jpg` | 1 |  |
| cookie | `/curriculum/u1-l1/cookie.webp` | 3 |  |
| crayon | `/curriculum/u7-objects/crayon.png` | 1 |  |
| dad | `/curriculum/u5-family/dad.jpg` | 27 |  |
| desk | `/curriculum/u7-objects/desk.png` | 6 |  |
| dog | `/curriculum/u9-l1/dog.jpg` | 39 | `/curriculum/u4-l2/dog.jpg`, `/curriculum/u1-l2/dog.jpg` |
| doll | `/curriculum/u1-l2/doll.png` | 11 |  |
| duck | `/curriculum/u1-l2/duck.png` | 3 |  |
| ear | `/curriculum/u1-l2/ear.jpg` | 2 |  |
| ears | `/curriculum/u6-body/ears.png` | 3 |  |
| eat | `/curriculum/u12-routines/eat.jpg` | 5 |  |
| eat dinner | `/curriculum/u12-routines/eat-dinner.jpg` | 3 |  |
| egg | `/curriculum/u8-l1/egg.jpg` | 22 | `/curriculum/u1-l2/egg.jpg` |
| elephant | `/curriculum/u9-l1/elephant.jpg` | 17 | `/curriculum/u1-l2/elephant.jpg` |
| eyes | `/curriculum/u6-body/eyes.png` | 8 |  |
| feet | `/curriculum/u6-body/feet.png` | 3 |  |
| final mystery character | `/curriculum/u6-characters/mystery-5.png` | 1 |  |
| fingers | `/curriculum/u6-body/fingers.png` | 2 |  |
| fish | `/curriculum/u9-l1/fish.avif` | 15 | `/curriculum/u1-l2/fish.avif` |
| flower | `/curriculum/u1-l2/flower.jpg` | 2 |  |
| friendly kid waving hello | `/curriculum/u1-l1/wavingkid.jpg` | 1 |  |
| frog | `/curriculum/u1-l2/frog.jpg` | 4 |  |
| get up | `/curriculum/u12-routines/get-up.jpg` | 2 |  |
| gift | `/curriculum/u1-l3/gift.jpg` | 2 |  |
| giraffe | `/curriculum/u9-l1/giraffe.png` | 2 |  |
| go home | `/curriculum/u12-routines/go-home.jpg` | 2 |  |
| go to bed | `/curriculum/u12-routines/go-to-bed.jpg` | 3 |  |
| go to school | `/curriculum/u12-routines/go-to-school.jpg` | 1 |  |
| goat | `/curriculum/u1-l3/goat.avif` | 6 |  |
| grapes | `/curriculum/u1-l3/grapes.jpg` | 3 |  |
| hands | `/curriculum/u6-body/hands.png` | 4 |  |
| hat | `/curriculum/u1-l3/hat.avif` | 12 |  |
| head | `/curriculum/u6-body/head.png` | 3 |  |
| hen | `/curriculum/u1-l3/hen.jpg` | 4 |  |
| hog | `/curriculum/u6-words/hog.png` | 2 |  |
| hop | `/curriculum/u12-routines/hop.jpg` | 1 |  |
| house | `/curriculum/u1-l3/house.jpeg` | 8 | `/curriculum/u10-l1/house.jpeg` |
| ice cream | `/curriculum/u1-l3/icecream.jpg` | 2 |  |
| icecream | `/curriculum/u1-l3/icecream.jpg` | 1 |  |
| igloo | `/curriculum/u1-l3/igloo.jpg` | 4 |  |
| insect | `/curriculum/u1-l3/insect2.jpg` | 3 |  |
| jam | `/curriculum/u2-l1/jam.avif` | 1 |  |
| jellyfish | `/curriculum/u2-l1/jellyfish.jpg` | 1 |  |
| jog | `/curriculum/u6-words/jog.png` | 2 |  |
| juice | `/curriculum/u2-l1/juice.avif` | 1 |  |
| king | `/curriculum/u2-l1/king.jpg` | 1 |  |
| kitchen | `/curriculum/u10-rooms/kitchen.jpg` | 8 |  |
| kite | `/curriculum/u2-l1/kite.jpg` | 1 |  |
| knees | `/curriculum/u6-body/knees.png` | 2 |  |
| koala | `/curriculum/u2-l1/koala.avif` | 1 |  |
| lamp | `/curriculum/u2-l1/lamp.avif` | 1 |  |
| leaf | `/curriculum/u2-l1/leaf.avif` | 1 |  |
| legs | `/curriculum/u6-body/legs.png` | 3 |  |
| lion | `/curriculum/u9-l1/lion.avif` | 13 | `/curriculum/u2-l1/lion.avif` |
| living room | `/curriculum/u10-rooms/living-room.jpg` | 7 |  |
| log | `/curriculum/u6-words/log.png` | 2 |  |
| mat | `/curriculum/u6-words/mat.png` | 2 |  |
| messy desk scene | `/curriculum/u7-scenes/messy-desk.jpg` | 1 |  |
| milk | `/curriculum/u2-l2/milk.avif` | 1 |  |
| mom | `/curriculum/u5-family/mom.jpg` | 28 |  |
| monkey | `/curriculum/u9-l1/monkey.avif` | 17 | `/curriculum/u2-l2/monkey.avif` |
| moon | `/curriculum/u2-l2/moon.jpeg` | 1 |  |
| morning | `/curriculum/u12-routines/morning.jpg` | 1 |  |
| mouth | `/curriculum/u6-body/mouth.png` | 1 |  |
| nest | `/curriculum/u2-l2/nest.avif` | 1 |  |
| new animal scene | `/curriculum/u9-scenes/big-small.jpg` | 2 | `/curriculum/u9-scenes/all-animals.jpg` |
| new character | `/curriculum/u6-characters/mystery-4.png` | 1 |  |
| new classroom scene | `/curriculum/u7-scenes/empty-classroom.jpg` | 2 | `/curriculum/u7-scenes/classroom-challenge.jpg` |
| new food picture | `/curriculum/u8-scenes/lunch-plate.jpg` | 1 |  |
| new food scene | `/curriculum/u8-scenes/family-table.jpg` | 2 | `/curriculum/u8-scenes/breakfast.jpg` |
| new house scene | `/curriculum/u10-scenes/cutaway-house.jpg` | 2 | `/curriculum/u10-scenes/house-garden.jpg` |
| new mystery character | `/curriculum/u6-characters/mystery-1.png` | 1 |  |
| new unfamiliar character | `/curriculum/u6-characters/mystery-3.png` | 1 |  |
| night | `/curriculum/u12-routines/night.jpg` | 1 |  |
| nose | `/curriculum/u2-l2/nose.jpg` | 5 |  |
| nut | `/curriculum/u2-l2/nut.avif` | 1 |  |
| octopus | `/curriculum/u2-l2/octopus.avif` | 1 |  |
| open classroom scene | `/curriculum/u7-scenes/open-classroom.jpg` | 1 |  |
| orange | `/curriculum/u2-l2/orange.jpg` | 1 |  |
| owl | `/curriculum/u2-l2/owl.jpeg` | 1 |  |
| panda | `/curriculum/u2-l3/panda.jpg` | 1 |  |
| pen | `/curriculum/u4-l3/pen.png` | 15 |  |
| pencil | `/curriculum/u2-l3/pencil.jpeg` | 2 |  |
| picture 1 | `/curriculum/u12-routines/story-1-morning.jpg` | 1 |  |
| picture 2 | `/curriculum/u12-routines/story-2-afternoon.jpg` | 1 |  |
| picture 3 | `/curriculum/u12-routines/story-3-night.jpg` | 1 |  |
| pizza | `/curriculum/u8-l1/pizza.avif` | 18 | `/curriculum/u2-l3/pizza.avif` |
| pizza with a banana on top | `/curriculum/u8-l3/pizza-banana.jpg` | 1 |  |
| play | `/curriculum/u12-routines/play.jpg` | 5 |  |
| quail | `/curriculum/u2-l3/quail.jpeg` | 1 |  |
| queen | `/curriculum/u2-l3/queen.jpg` | 1 |  |
| quilt | `/curriculum/u2-l3/quilt.avif` | 1 |  |
| rabbit | `/curriculum/u2-l3/rabbit.avif` | 1 |  |
| rainbow | `/curriculum/u2-l3/rainbow.jpg` | 1 |  |
| red apple | `/curriculum/u1-l1/apple.jpg` | 1 |  |
| rice | `/curriculum/u8-l1/rice.jpg` | 8 |  |
| rice with apple slices | `/curriculum/u8-l3/rice-apple.jpg` | 1 |  |
| ring | `/curriculum/u2-l3/ring.avif` | 1 |  |
| school bag | `/curriculum/u7-l1/bag.avif` | 1 |  |
| shoulders | `/curriculum/u6-body/shoulders.png` | 2 |  |
| sister | `/curriculum/u5-family/sister.jpg` | 25 |  |
| sleep | `/curriculum/u12-routines/sleep.jpg` | 6 |  |
| sock | `/curriculum/u3-l1/sock.avif` | 1 |  |
| star | `/curriculum/u3-l1/star.avif` | 2 |  |
| sun | `/curriculum/u3-l1/sun.jpg` | 1 |  |
| take a bath | `/curriculum/u12-routines/take-a-bath.jpg` | 2 |  |
| tent | `/curriculum/u3-l1/tent.avif` | 1 |  |
| the finished dream room | `/curriculum/u10-scenes/dream-room.jpg` | 1 |  |
| tiger | `/curriculum/u3-l1/tiger.jpg` | 1 |  |
| toes | `/curriculum/u6-body/toes.png` | 2 |  |
| tomato | `/curriculum/u3-l1/tomato.jpeg` | 1 |  |
| toy | `/curriculum/u11-l1/toy.jpg` | 2 |  |
| tree | `/curriculum/u3-l5/tree.avif` | 1 |  |
| ukulele | `/curriculum/u3-l1/ukulele.avif` | 1 |  |
| umbrella | `/curriculum/u3-l1/umbrella.avif` | 1 |  |
| unicorn | `/curriculum/u3-l1/unicorn.avif` | 1 |  |
| unknown family scene | `/curriculum/u5-family/family-scene.jpg` | 1 |  |
| van | `/curriculum/u3-l2/van.avif` | 1 |  |
| vase | `/curriculum/u3-l2/vase.avif` | 1 |  |
| volcano | `/curriculum/u3-l2/volcano.jpeg` | 1 |  |
| wake up | `/curriculum/u12-routines/wake-up.jpg` | 9 |  |
| watch | `/curriculum/u3-l2/watch.avif` | 1 |  |
| watermelon | `/curriculum/u3-l2/watermelon.avif` | 1 |  |
| web | `/curriculum/u3-l2/web.avif` | 1 |  |
| wig | `/curriculum/u12-routines/wig.jpg` | 1 |  |
| x-ray | `/curriculum/u3-l2/xray.avif` | 1 |  |
| xylophone | `/curriculum/u3-l2/xylophone.avif` | 1 |  |
| yak | `/curriculum/u3-l3/yak.jpeg` | 1 |  |
| yarn | `/curriculum/u3-l3/yarn.jpg` | 1 |  |
| yo-yo | `/curriculum/u3-l3/yoyo.jpeg` | 1 |  |
| zebra | `/curriculum/u3-l3/zebra.avif` | 1 |  |
| zipper | `/curriculum/u3-l3/zipper.avif` | 1 |  |
| zoo | `/curriculum/u3-l3/zoo.avif` | 1 |  |
