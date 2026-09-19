import React, { useState } from "react";

// Pictures that stand in for the emoji the A1 Kids lessons used to show
// (counting objects, feeling faces, cake, candles). Existing lesson pictures are reused
// where one already exists; the rest live in /curriculum/objects/ and /curriculum/u4-feelings/.
// A picture that has not been added yet shows a dashed circle instead of a broken image.
export const OBJECT_SRC = {
  apple: "/curriculum/u8-l1/apple.jpg",
  banana: "/curriculum/u8-l1/banana.jpg",
  star: "/curriculum/u3-l1/star.avif",
  juice: "/curriculum/u2-l1/juice.avif",
  fish: "/curriculum/u9-l1/fish.avif",
  dog: "/curriculum/u9-l1/dog.jpg",
  kite: "/curriculum/u2-l1/kite.jpg",
  leaf: "/curriculum/u2-l1/leaf.avif",
  cookie: "/curriculum/u1-l1/cookie.webp",
  ball: "/curriculum/u11-l1/ball.jpg",
  car: "/curriculum/u11-l1/car.avif",
  gift: "/curriculum/u1-l3/gift.jpg",
  grapes: "/curriculum/u1-l3/grapes.jpg",
  balloon: "/curriculum/objects/balloon.png",
  donut: "/curriculum/objects/donut.png",
  lollipop: "/curriculum/objects/lollipop.png",
  strawberry: "/curriculum/objects/strawberry.png",
  monster: "/curriculum/objects/monster.png",
  candle: "/curriculum/objects/candle.png",
  cake: "/curriculum/objects/birthday-cake.png",
  nametag: "/curriculum/objects/name-tag.png",
  "face-happy": "/curriculum/u4-feelings/happy.png",
  "face-sad": "/curriculum/u4-feelings/sad.png",
  "face-angry": "/curriculum/u4-feelings/angry.png",
  "face-tired": "/curriculum/u4-feelings/tired.png",
};

// Keyed by name so a re-used slot in the next slide starts fresh (a failed load never sticks).
export function ObjImg(props) {
  return <ObjImgInner key={props.name} {...props} />;
}

function ObjImgInner({ name, size = 40 }) {
  const [state, setState] = useState("loading");
  const [tries, setTries] = useState(0);
  const src = OBJECT_SRC[name];
  const box = { width: size, height: size };
  if (!src) return <span className="obj-missing" style={box} aria-hidden="true" />;
  return (
    <>
      {state !== "ok" && <span className="obj-missing" style={box} aria-hidden="true" />}
      {state !== "failed" && (
        <img
          key={tries}
          className="obj-img"
          src={tries ? `${src}?r=${tries}` : src}
          alt={name.replace("face-", "")}
          draggable={false}
          onLoad={() => setState("ok")}
          onError={() => (tries < 2 ? setTries((t) => t + 1) : setState("failed"))}
          style={state === "ok" ? box : { position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        />
      )}
    </>
  );
}

export const objectPicStyles = `
.obj-img { display: block; object-fit: contain; }
.count-emoji .obj-img, .match-emojis .obj-img { background: #fff; border-radius: 12px; padding: 3px; box-sizing: border-box; box-shadow: 0 3px 8px rgba(27,42,74,0.14); }
.obj-missing { display: block; border: 3px dashed #C9C0DA; border-radius: 50%; box-sizing: border-box; }
`;
